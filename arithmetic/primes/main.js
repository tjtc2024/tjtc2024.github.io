const box = document.querySelector('#prime-factorization');
const input = document.querySelector('#input');
const result = document.querySelector('#result');


// 素因数分解
function generateDivisors(p_value) {
    let value = p_value;
    let npow = 0;
    let divisors = [];

    for(let number = 2; number <= value; number++) {
        if(value % number === 0) {
            // 指数初期化
            npow = 0;

            while(value % number === 0) {
                //valueをnumberで除算していき、ループごとにカウントを一つ増やして累乗の指数を求める
                npow++;
                value /= number;
            }
            //一つ目の約数と指数を配列にpush
            divisors.push({number, npow});
        }
        //この流れを(value / number === 1)になるまで繰り返す
    }

    return divisors;
}


// ボタン
box.addEventListener('keydown', e => {
    if(e.key === 'Enter') {
        let p_value = box.value;
        let divisors = generateDivisors(p_value);
        box.value = null;
        if (p_value >= 2) {
            input.textContent = String(p_value);
            result.textContent = divisors.map(divisor => (divisor.npow === 1) ? `${divisor.number}` : `${divisor.number}^${divisor.npow}`).join('✖️');
        }
        else {
            input.textContent = null;
            result.textContent = null;
        }
    }
})
