/* ---------------------------------------------------------------------- */
/* Logical Operators                                                      */
/* ---------------------------------------------------------------------- */
let age=20
if (age >=14 && age<=90)
console.log(age)





let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB;

// 논리합(또는) 연산자
let AorB;

// 부정 연산자
let reverseValue;


// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && " " && [] && { thisIsFalsy: false };

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy;


let userName = prompt("사용자 이름을 입력해주세요",'');

// let pw = prompt ("비밀번호:",'') 

if (userName?.toLowerCase()=== 'Admin') { 
    let pw= prompt ("비밀번호를 입력해 주세요",'');
    if (pw === 'TheMaster'){
      console.log('환영합니다.');}
    else {
      console.log ('취소되었습니다');
    }

}else if (userName === ' ' || userName === null){
    console.log('취소됬습니다 ');
}else {
    console.log('인증되지 않은 사용자 입니다.');
}
