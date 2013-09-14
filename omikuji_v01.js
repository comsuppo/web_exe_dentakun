/**
 * @author XXYos01
 */

//**********************************************************************
//  getIndex(aPtSu,aOmikujiNo) 
//	
//	
//	引数　パターン数
//       おみくじＮｏ
//　　　　  
//	戻値　ＸＸ運配列のIndex
//　　　　
//**********************************************************************
function getIndex(aPtSu,aOmikujiNo) {

    var result = Math.floor(Math.random() * aPtSu) + aPtSu * aOmikujiNo;
    // alert(result);
    return result;
    
}

//**********************************************************************
//  getOmikujiA() 
//	
//	引数　なし
//　　　　  
//	戻値　なし
//　　　　
//**********************************************************************
function getOmikujiA() {
	
	$('#otuge')
	.css({
		'top': '-200px'
	})
	.html('');
	
    var omikuji   = ["大吉", "吉", "末吉", "凶", "大凶"];
    
    var negaigoto = ["思いどおりになります。",
				     "首尾よくかないます。",
				     "人の助けでかないます。", 		 
				     "他人のため、という気持ちがあればかないます。",
				     "柔軟に対応すればかないます。", 
				     "慎重に行えばかないます。",
				     "希望がかなう兆しがみえてきます。",
				     "気長に待ちましょう。時が来ればかないます。", 
				     "今日、明日ではありませんが、後にかないます",
				     "かないそうです。しかし、油断は禁物。",  			 
                     "かないそうです。しかし、そこに色恋の影がある場合は要注意。",
                     "かないそうです。しかし、欲望が強すぎると一転して凶になります。",              
                     "他人のことばに迷わされ、かないません。",
                     "心配が多く、しかしその割りには得るものは少ないでしょう。",                 
                     "今はその時ではありません。"];      
          
    var renaiun   = ["積極的に出れば吉。",
    			     "チャンス到来です。",
    			     "その人こそがあなたにとってすばらしい人。",
    			 	 "自信を持って告白して吉。",
                     "相手のことを冷静な目でみてみましょう。",
                     "信頼に足る人でしょう。あとはあなた自身がどうかです。",
                     "決断を少しのばしましょう。", 
                     "再出発もいいかも知れません。", 
                     "この人は手放さない方がいいかも。",
                     "自分の目移り、心変わりに注意。",
                     "途方にくれてしまったりすることがあるかも知れません。",
                     "新しい恋を見つけるために出かけましょう。",
                     "自分から動くとだめ。",
                     "他人の言葉に惑うな。",
                     "今の恋愛はちょっと待った方がいいかも。"];
                     
    var kinun     = ["とてもいいでしょう。",
                     "絶好調。",    
                     "ざっくざっく。", 
                     "利益充分なり。",
                     "いいでしょう。",
                     "ある。",
                     "損なし　相当利あり。",
                     "悪い状況は好転します。", 
                     "悪くはない。",
                     "あまり利益は期待できませんが、損はしません。",
                     "損をするかも。",
                     "あまり好調ではありません。",
                     "あまり利益は期待できません。",
                     "周囲の影響で安定しません。",
                     "急ぐと損をします。じっくりと考えましょう。"];
    
    //願い事など運の文言はおみくじ一つにつき３パターン                 
    var PtSu = 3;
                     
    var OmikujiNo = Math.floor(Math.random() * 10);
    
    switch(OmikujiNo){
    	case 0:
			break;
		case 1:
		case 2:
		case 3: 
			OmikujiNo = 1;
			break;
		case 4:
		case 5:
		case 6: 
			OmikujiNo = 2;
			break;
		case 7:
		case 8: 
			OmikujiNo = 3;
			break; 
		case 9:
			OmikujiNo = 4;
			break;
		default: 
			OmikujiNo = 4;
			break;
	}
	
	//document.getElementById('omikujibun').innerHTML = omikuji[OmikujiNo];
	//document.getElementById('negaigotobun').innerHTML = negaigoto[getIndex(PtSu,OmikujiNo)];
	//document.getElementById('renaiunbun').innerHTML = renaiun[getIndex(PtSu,OmikujiNo)];
	//document.getElementById('kinunbun').innerHTML = kinun[getIndex(PtSu,OmikujiNo)];　
	
	/*document.getElementById('kekka').innerHTML = omikuji[OmikujiNo] + '<br><br>'
	                                           + '◇願い事　' + negaigoto[getIndex(PtSu,OmikujiNo)] + '<br><br>'
	                                           + '◇恋愛運　' + renaiun[getIndex(PtSu,OmikujiNo)] + '<br><br>'
	                                           + '◇金運　　' + kinun[getIndex(PtSu,OmikujiNo)]; */
	                                          
	/*document.getElementById('kekka').innerHTML = omikuji[OmikujiNo] + '<br><br>'
	                                           + '◇願い事　' + negaigoto[getIndex(PtSu,OmikujiNo)] + '<br><br>'
	                                           + '◇恋愛運　' + renaiun[getIndex(PtSu,OmikujiNo)] + '<br><br>'
	                                           + '◇金運　　' + kinun[getIndex(PtSu,OmikujiNo)]; */
	                                           
	                                           
	var result1 = '◎' + omikuji[OmikujiNo] + '<br><br>'
	            + '◇願い事　' + negaigoto[getIndex(PtSu,OmikujiNo)] + '<br><br>'
	            + '◇恋愛運　' + renaiun[getIndex(PtSu,OmikujiNo)] + '<br><br>'
	            + '◇金運　　' + kinun[getIndex(PtSu,OmikujiNo)] + '<br><br>'
	            + '（このメッセージはクリックすると消えます。）'; 
	                                           
	$('#otuge')
	.html(result1)
	.fadeIn('fast')
	.animate({
		'top': '190px'
	}, 1000)
	.animate({
		'top': '180px'
	}, 500)
	//.delay(5000)
	//.fadeOut('slow')
	.bind('click', function() {
		$(this).stop(true, false).fadeOut('slow');
	}); 

}


