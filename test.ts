// オブジェクトのキーを取得する

export interface FormValues {
    last_name: string | null;
    first_name: string | null;
    gender: number | null;
    birthday: string | null;
}

const setValue = <K extends keyof FormValues>(
    obj: FormValues, // オブジェクトを引数として追加
    val: FormValues[K],
    key: K,
) => {
    obj[key] = val; // 修正: 関数の引数で渡されたオブジェクトに対して値を設定
};

// 使用例
const example: FormValues = {
    last_name: "Smith",
    first_name: "John",
    gender: 1,
    birthday: "1990-01-01",
};

setValue(example, "Doe", "last_name");
setValue(example, 2, "gender");

console.log(example);
console.log("get");
  // 例: { last_name: 'Doe', first_name: 'John', gender: 2, birthday: '1990-01-01' }
