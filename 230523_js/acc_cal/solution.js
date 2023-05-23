// A, B, ������ ���ڿ��� ���� �������� ���е� ���ڿ� data�� �Ű������� ���޵Ǵ� �Լ�
// 1. ������ ��� ȸ�� ������ ���� ��� ��
// 2. �� ȸ���� ����� ��� ���� ��
// �� ����� ���� �������� ���е� ���ڿ��� ���·� ���

function solution(data) {
    let num1 = +data.split(' ')[0];     // ù��° ��
    let num2 = +data.split(' ')[1];     // �ι�° ��
    let cal = data.split(' ')[2].split(''); // ������
    let answer = 0;                         // ��� ȸ�� ������ ���� ��� ��
    let answerSum = 0;                            // �� ȸ���� ����� ��� ���� ��

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