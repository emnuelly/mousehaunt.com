/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-alert */

import React, { useState, useContext } from 'react'

import { ethers } from 'ethers'
import { Formik, Field, Form } from 'formik'
import Image from 'next/image'
import { useRouter } from 'next/router'

import Loading from '../../../assets/svg/loading.svg'
import { StoreContext } from '../../../contexts/StoreContext'
import decrement from '../../../public/images/other/decrement.png'
import increment from '../../../public/images/other/increment.png'
import { isTransactionMined, NETWORK_TIMEOUT } from '../../../utils/blockchain'
import config, { Network } from '../../../utils/config'
import waitFor from '../../../utils/waitFor'
import { Button } from '../Button'
import { LoadingContainer } from './styles'
import { FormMainSection, ContentForm, ButtonFormat, FormIncremental } from './stylesForm'

function mhtAllowance(boosterAmount: number, network: Network) {
  return ethers.utils
    .parseEther(config[network].BoosterSale.Genesis.mhtPrice.toString())
    .mul(boosterAmount)
}

// eslint-disable-next-line no-shadow
enum BUY_STEP {
  APPROVE,
  BUY,
  WAIT
}

const CardAmount: React.FC = () => {
  const [boosterAmount, setBoosterAmount] = useState(1)
  const [buyStep, setBuyStep] = useState<BUY_STEP>(BUY_STEP.APPROVE)
  const router = useRouter()
  const { refresh, setRefresh, contracts, provider, network, userInfoDetailed } =
    useContext(StoreContext)

  const allowance = userInfoDetailed?.allowance.genesis
    ? Number(userInfoDetailed.allowance.genesis)
    : 0

  const approveBooster = async () => {
    if (provider && contracts) {
      try {
        setBuyStep(BUY_STEP.WAIT)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const ethersProvider = new ethers.providers.Web3Provider(provider as any)
        const approve = await contracts.mht.approve(
          config[network].BoosterSale.Genesis.address,
          mhtAllowance(boosterAmount, network)
        )
        await waitFor(() => isTransactionMined(ethersProvider, approve.hash), NETWORK_TIMEOUT)
        setBuyStep(BUY_STEP.BUY)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        const message = err.data ? err.data.message : err.message
        alert(message)
        setBuyStep(BUY_STEP.APPROVE)
      }
    }
  }

  const buyBooster = async () => {
    if (provider && contracts) {
      try {
        setBuyStep(BUY_STEP.WAIT)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const ethersProvider = new ethers.providers.Web3Provider(provider as any)
        const buy = await contracts.boosterSaleGenesis.buy(boosterAmount.toString())
        const tx = await waitFor(
          () => isTransactionMined(ethersProvider, buy?.hash),
          NETWORK_TIMEOUT
        )
        setRefresh(!refresh)
        router.push({
          pathname: '/store/success',
          query: {
            type: `GENESIS BOOSTER${boosterAmount === 1 ? '' : 'S'}`,
            amount: boosterAmount,
            tx
          }
        })
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        const message = err.data ? err.data.message : err.message
        alert(message)
        setBuyStep(BUY_STEP.APPROVE)
      }
    }
  }

  const displayIncrementalButtons = () => (
    <>
      <FormIncremental>
        <label>Amount of boosters</label> <br />
        <span
          style={{
            margin: '5px',
            position: 'relative',
            top: '15%',
            left: '-1%'
          }}
          onClick={() => {
            if (boosterAmount > 1 && buyStep !== BUY_STEP.BUY) setBoosterAmount(boosterAmount - 1)
          }}
        >
          <Image alt='decrement' src={decrement} width='30px' height='30px' />
        </span>
        <Field id='amountBooster' name='amountBooster' value={boosterAmount} />{' '}
        <span
          style={{
            margin: '5px',
            position: 'relative',
            top: '15%'
          }}
          onClick={() => {
            if (boosterAmount >= 1 && boosterAmount < allowance && buyStep !== BUY_STEP.BUY) {
              setBoosterAmount(boosterAmount + 1)
            }
          }}
        >
          <Image alt='increment' src={increment} width='30px' height='30px' />
        </span>
      </FormIncremental>
    </>
  )

  return (
    <>
      <Formik onSubmit={() => undefined} initialValues={{ amount: 1, amountMHT: 1 }}>
        <ContentForm>
          <Form>
            <FormMainSection>{displayIncrementalButtons()}</FormMainSection>
            <ButtonFormat>
              <Button
                disabled={buyStep !== BUY_STEP.APPROVE || allowance === 0}
                onClick={approveBooster}
              >
                APPROVE MHT
              </Button>
              <Button disabled={buyStep !== BUY_STEP.BUY || allowance === 0} onClick={buyBooster}>
                BUY
              </Button>
            </ButtonFormat>
            {buyStep === BUY_STEP.WAIT && (
              <LoadingContainer>
                <Loading />
              </LoadingContainer>
            )}
          </Form>
        </ContentForm>
      </Formik>
    </>
  )
}

export default CardAmount
