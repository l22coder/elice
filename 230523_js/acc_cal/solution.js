// A, B, 연잔자 문자열이 각각 공백으로 구분된 문자열 data가 매개변수로 전달되는 함수
// 1. 계산기의 모든 회차 연산이 끝난 결과 값
// 2. 각 회차의 결과를 모두 더한 값
// 두 결과가 각각 공백으로 구분된 문자열의 형태로 출력

function solution(data) {
    let num1 = +data.split(' ')[0];     // 첫번째 값
    let num2 = +data.split(' ')[1];     // 두번째 값
    let cal = data.split(' ')[2].split(''); // 연산자
    let answer = 0;                         // 모든 회차 연산이 끝난 결과 값
    let answerSum = 0;                            // 각 회차의 결과를 모두 더한 값

    answer = num1;

    for(let i = 0; i < cal.length; i++){  
        if(cal[i] === '+')  answer += num2;
        if(cal[i] === '-')  answer -= num2;
        if(cal[i] === '*')  answer *= num2;
        if(cal[i] === '/')  answer = Math.floor(answer / num2) ;
        
        answerSum += answer;
    }   

    return answer+" "+answerSum;
}

const input = "124 7 +/-**"
console.log(solution(input)); // 539 776