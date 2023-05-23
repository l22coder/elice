// 5명이 외친 제시어가 순서대로 공백을 기준으로 나열된 문자열이 매개변수 data로 전달된다.
// 5명이 외친 제시어 중 중복된 제시어는 한 번만 출력하며, 공백을 기준으로 나열된 문자열의 형태로 출력한다.

function solution(data){
    // set
    return Array.from(new Set(data.split(" "))).join(" ");
    // 1. 공백을 기준으로 나열된 String을 split(" ")을 사용하여 Array로 변환 
    // 2. Array을 Set으로 변환 => Set 내 값은 한 번만 나타낼 수 있으므로, 중복 값 제거됨
    // 3. 중복 제거 된 Set을 Array.from()을 사용하여 Array로 변환
    // 4. 공백을 기준으로 나열하기 위해 join(" ")을 사용하여 String으로 변환
    
    // filter, indexOf
    // return data.split(" ").filter((el, i) => data.split(" ").indexOf(el) === i).join(" ");
    // 1. 공백을 기준으로 나열된 String을 split(" ")을 사용하여 Array로 변환
    // 2. 매개변수 el, i를 받는 filter 함수 사용
    //    ㄴ el: 배열에서 찾을 요소, i: 배열 내 요소의 최초의 인덱스(기본값: 0)
    // 3. indexOf를 사용하여 Array의 찾을 요소의 인덱스 값과 배열 내의 요소의 최초의 인덱스 값 비교
    //    ㄴ indexOf(el) === i가 true일 경우, 앞에 찾은 요소와 중복되는 값이 아니기 때문에 해당 요소 Array로 반환
    //    ㄴ indexOf(el) === i가 false일 경우, 해당 요소 값이 앞에 이미 나온 값이기 때문에 pass
    // 4. 반환된 Array를 공백을 기준으로 나열하기 위해 join(" ")을 사용하여 String으로 변환

    // reduce, includes
    // return data.split(" ").reduce((acc, cur) => acc.includes(cur) ? acc : [...acc, cur], []).join(" ");
    // 1. 공백을 기준으로 나열된 String을 split(" ")을 사용하여 Array로 변환
    // 2. reduce(callback, initialValue) 함수 사용
    //    ㄴ callback: acc, cur
    //    ㄴ acc: 누산기. 반환값을 누적
    //    ㄴ cur: 처리할 현재 요소
    //    ㄴ initialValue: 첫번째 호출 값 []
    // 3. includes 함수를 사용하여 acc에 cur이 포함되어 있는지 확인
    // 4. 삼항연산자를 사용하여 acc.includes(cur)이 true일 경우, 그대로 acc 반환
    // 5. acc.includes(cur)이 false일 경우, spread operation 사용하여 acc 뒤에 cur 추가
    // 6. 반환된 Array를 공백을 기준으로 나열하기 위해 join(" ")을 사용하여 String으로 변환
}

const input = "엘리스 에리스 에리스 엘리스 엘리수";
console.log(solution(input)); // 엘리스 에리스 엘리수