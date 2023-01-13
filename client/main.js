import {
    getNode as $,
    typeError,
    syntaxError,
    refError,
    getInputValue,
    getRandom,
    insertLast,
    clearContents,
    isNumericString,
    addClass,
    showAlert,
    copy,
    removeClass,
  } from './lib/index.js';
  
  import { jujeobData } from './data/data.js';
  
  // submit 이벤트 핸들러 연결하기
  // 기본 동작 차단하기
  // getInputValue 함수 만들기
  // input값 가져오기
  
  
  // 주접 데이터 가져오기
  // 주접 리스트 변수에 담기
  // getRandom 함수 만들고 가져오기
  // list 한개 추출하기 
  
  
  // result 영역에 insert 하기
  // 이름값이 없을 때 validation 하기
  // 숫자형 문자값이 들어왔을 때 validation 하기
  // isNumericString 함수 만들기
  // showAlert 함수 만들기 
  // copy 함수 만들고 가져오기 
  // showAlert 보여주기
  // 
  
  
  
  
  
  
  
  
  
  
  const submit = $('#submit');
  const resultArea = $('.result');
  const alertError = $('.alert-error');
  const alertSuccess = $('.alert-success');
  
  
  function clickSubmitHandler(e) {
    e.preventDefault();
  
    let name = getInputValue('#nameField');
    let list = jujeobData(name);
    let pick = list[getRandom(list.length-1)];
  
    if(!name){
      showAlert(alertError,'이름을 작성해주세요.')
      addClass(resultArea,'shake');
      return
    }
  
    if(isNumericString(name)){
      showAlert(alertError,'제대로된 이름을 입력해주세요.')
      return;
    }
    
    
  
    clearContents(resultArea)
    insertLast(resultArea,pick)
  }
  
  
  
  function clickResultHandler(){
    
    if(getInputValue('#nameField')){
  
      let text = resultArea.textContent;
    
      copy(text).then(()=>{
        showAlert(alertSuccess,'클립보드 복사 완료!')
      })
    }
  
  }
  
  
  submit.addEventListener('click', clickSubmitHandler);
  resultArea.addEventListener('click',clickResultHandler)
  
  


