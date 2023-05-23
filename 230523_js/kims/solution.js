// 반 친구 이름이 나열된 문자열이 주어질 때, 
// 김씨 성을 가진 친구가 나열된 문자열을 출력하는 함수 작성

function solution(data){
    return data.split(" ").filter((el) => el[0] === "김").join(" ");
    // 1. String을 split(" ")으로 Array 변환
    // 2. filter 함수를 사용하여 0번째 인덱스가 "김"인 요소를 반환
    // 3. 반환된 배열을 공백을 기준으로 나열하기 위해 join(" ")을 사용하여 String 변환
}

const input = "도도새 김철수 안영희 김준수 엘리스";
console.log(solution(input));   // 김철수 김준수
