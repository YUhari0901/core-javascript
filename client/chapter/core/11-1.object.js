/* ---------------------------------------------------------------------- */
/* Object                                                                 */
/* ---------------------------------------------------------------------- */

/* Primitives vs. Object ------------------------------------------------ */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = /* css */`
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;




// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap =  {
    position:"fixed",
    zindex:"10000",
    top:"50%",
    left:"50%",
    width:"60vw",
    maxwidth:"800px",
    height:"40vh",
    minheight:"280px",
    transform:"translate(-50%, -50%)",
  };


// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser ={
  uid:'user-id-asd',
  name:'haripie',
  email:'lnara103304l@gmail.com '
}


// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.
/* console.log(authUser.uid); */

// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고 
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.
/* console.log(authUser["uid"]); */

// 계산된 프로퍼티 (calcurate property)
let calculateProperty = 'phone'; // phone | tel

function createUser (computedProp='phone'){
  return{
    name:'unknown',
    email:'unknown@company.io',
    [computedProp]: '010-1235-1234'
  }
}

const user=createUser()


// 프로퍼티 포함 여부 확인



// 프로퍼티 나열
let keyArray=Object.keys()


let result=getPropertiesList(authUser)


// 프로퍼티 제거 or 삭제 

//유틸 함수를 만들 수 있을 것 같은데?
/* 함수 만드는 방법
1.함수 이름정하기
2.인수(argument)과 인자(parameter)정하기
3.확인하기 (validation)
4.리턴값(return)  */

function removeProperty(object,key){
  object[key]=null;
}

removeProperty(authUser,'uid')

// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;

const student ={name,email,authorization,isLogin}

// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...


// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject(object) {
  return object.keys(object).length ===0 ? true:flase
 
}


const emptu={}
console.log( isEmptyObject(empty));


let salaries = {
  John:100,
  Ann:160,
  Pete:430
}

const {
  John:John,
  Ann:Ann,
  Pete:Pete
}=salaries; 

//월급의 총 합을 구하세요

Object.entries(salaires)



let color = ['#ff0000', '#2b00ff', '#00ff2f'];
const COLOR_RED = color[0];
const COLOR_BLUE = color[1];
const COLOR_GREEN = color[2];