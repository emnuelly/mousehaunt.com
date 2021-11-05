declare module "react-full-page" {
  type ControlComponentsProps = {
    getCurrentSlideIndex: () => number;
    onNext: () => void;
    onPrev: () => void;
    scrollToSlide: (n: number) => void;
    slidesCount: number;
  };

  type FullPageProps = {
    initialSlide?: number;
    duration?: number;
    controls?: boolean | React.FC<ControlComponentsProps>;
    controlProps?: any;
    beforeChange?: (params: {from:number, to:number}) => void;
    afterChange?: (params: {from:number, to:number}) => void;
    scrollMode?: "full-page" | "normal";
    ref?: any
    scrollToSlide?: (n: number) => void;
  };
  export const FullPage: React.FC<FullPageProps>;

  export const Slide: React.FC;
}