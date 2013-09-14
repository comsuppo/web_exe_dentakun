/**
 * @author NT_XXMas02
 */

nowTotal = 0;
// 現在の合計値
nowInput = "";
// 現在入力している値
nowCalc = "+";
// 合計と入力値の演算子
nowFlg = 1;
// １回前に入力したもの 0:数字 1:演算子
omikuj = "結果";
ocnt = 0;

function inValue(nowData) {// 0～9または小数点ボタンを押した
	nowFlg = 0;
	// １回前に入力したものは数値
	nowInput += nowData;
	// 現在入力している値に追加
	document.dentakuForm.nowLine.value = nowInput;
	// 現在入力している値表示
}

function nowCalculate(nowData) {// 演算ボタンを押した
	if (nowFlg == 0) {// １回前に入力したものは数値か？
		nowFlg = 1;
		// １回前に入力したものは演算子
		nowWork = nowTotal + nowCalc + nowInput;
		// 一連の計算式を作る
		nowTotal = eval(nowWork);
		// 計算式を計算させる
		nowInput = "";
		// 現在入力している値をクリア
		document.dentakuForm.nowLine.value = nowTotal;
		// 合計を表示
	}
	if (nowData == "=") {// 演算ボタンは[＝]か？
		// nowTotal = 0;
		// 合計をクリア　を無効化
			// ここで合計をクリアすると、「＝」を入力後に計算を継続できなくなる為
		
		nowCalc = "+";
		// 演算子を[+]とする
	} else {// 演算ボタンは[＝]以外である
		nowCalc = nowData;
		// 演算子を退避させておく
	}
}

function nowCrl() {// クリアボタン[C]を押した
	nowTotal = 0;
	// 合計クリア
	nowCalc = "+";
	// 演算子クリア
	nowInput = "";
	// 現在入力している値をクリア
	document.dentakuForm.nowLine.value = nowTotal;
	// つまり、０を表示
}

