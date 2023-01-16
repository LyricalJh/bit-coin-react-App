// import original module declarations
import 'styled-components';

// and extend them! 타입스크립트를 사용하는것이라면 타입 지정을 위해서 interface를 작성해야한다.
declare module 'styled-components' {
  export interface DefaultTheme {
    textColor:string;
    bgColor:string;
    accentColor:string;
  }
}