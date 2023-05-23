// 5���� ��ģ ���þ ������� ������ �������� ������ ���ڿ��� �Ű����� data�� ���޵ȴ�.
// 5���� ��ģ ���þ� �� �ߺ��� ���þ�� �� ���� ����ϸ�, ������ �������� ������ ���ڿ��� ���·� ����Ѵ�.

function solution(data){
    // set
    return Array.from(new Set(data.split(" "))).join(" ");
    // 1. ������ �������� ������ String�� split(" ")�� ����Ͽ� Array�� ��ȯ 
    // 2. Array�� Set���� ��ȯ => Set �� ���� �� ���� ��Ÿ�� �� �����Ƿ�, �ߺ� �� ���ŵ�
    // 3. �ߺ� ���� �� Set�� Array.from()�� ����Ͽ� Array�� ��ȯ
    // 4. ������ �������� �����ϱ� ���� join(" ")�� ����Ͽ� String���� ��ȯ
    
    // filter, indexOf
    // return data.split(" ").filter((el, i) => data.split(" ").indexOf(el) === i).join(" ");
    // 1. ������ �������� ������ String�� split(" ")�� ����Ͽ� Array�� ��ȯ
    // 2. �Ű����� el, i�� �޴� filter �Լ� ���
    //    �� el: �迭���� ã�� ���, i: �迭 �� ����� ������ �ε���(�⺻��: 0)
    // 3. indexOf�� ����Ͽ� Array�� ã�� ����� �ε��� ���� �迭 ���� ����� ������ �ε��� �� ��
    //    �� indexOf(el) === i�� true�� ���, �տ� ã�� ��ҿ� �ߺ��Ǵ� ���� �ƴϱ� ������ �ش� ��� Array�� ��ȯ
    //    �� indexOf(el) === i�� false�� ���, �ش� ��� ���� �տ� �̹� ���� ���̱� ������ pass
    // 4. ��ȯ�� Array�� ������ �������� �����ϱ� ���� join(" ")�� ����Ͽ� String���� ��ȯ

    // reduce, includes
    // return data.split(" ").reduce((acc, cur) => acc.includes(cur) ? acc : [...acc, cur], []).join(" ");
    // 1. ������ �������� ������ String�� split(" ")�� ����Ͽ� Array�� ��ȯ
    // 2. reduce(callback, initialValue) �Լ� ���
    //    �� callback: acc, cur
    //    �� acc: �����. ��ȯ���� ����
    //    �� cur: ó���� ���� ���
    //    �� initialValue: ù��° ȣ�� �� []
    // 3. includes �Լ��� ����Ͽ� acc�� cur�� ���ԵǾ� �ִ��� Ȯ��
    // 4. ���׿����ڸ� ����Ͽ� acc.includes(cur)�� true�� ���, �״�� acc ��ȯ
    // 5. acc.includes(cur)�� false�� ���, spread operation ����Ͽ� acc �ڿ� cur �߰�
    // 6. ��ȯ�� Array�� ������ �������� �����ϱ� ���� join(" ")�� ����Ͽ� String���� ��ȯ
}

const input = "������ ������ ������ ������ ������";
console.log(solution(input)); // ������ ������ ������