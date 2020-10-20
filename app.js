// 宿題
// クラスのみんなの名簿を2次元配列で作ってきましょう
// 配列の中に、連想配列のかたちです
let studentlist = [
	{name:'Rioさん', from:'沖縄', hobby:'バスケ'},
	{name:'Ryuichiさん', from:'沖縄', hobby:'ゴルフ'},
	{name:'Katumiさん', from:'沖縄', hobby:'ギター'},
	{name:'Gokiさん', from:'沖縄', hobby:'サッカー'},
	{name:'Maikoさん', from:'沖縄', hobby:'旅行'},
	{name:'MIchiyoさん', from:'神奈川', hobby:'旅行'}
];
// リストの0番目の人の名前をconsoleで表示しましょう
console.log(studentlist[0].name);
// リストの3番めの人の出身地をconsoleで表示しましょう
console.log(studentlist[3].from);
// リストの4番目の人の趣味をconsoleで表示しましょう
console.log(studentlist[4].hobby);


// for文を使ってstudentlist2のname部分をconsoleに表示してください
// ヒント：forで数が変わるiは、○番目の指定にも使えます
let studentlist2 = [
	{name:'Rioさん', from:'沖縄', hobby:'バスケ'},
	{name:'Ryuichiさん', from:'沖縄', hobby:'ゴルフ'},
	{name:'Katumiさん', from:'沖縄', hobby:'ギター'},
	{name:'Gokiさん', from:'沖縄', hobby:'サッカー'},
	{name:'Maikoさん', from:'沖縄', hobby:'旅行'},
	{name:'MIchiyoさん', from:'神奈川', hobby:'旅行'}
];


for (let i = 0; i <= 5; i++){
	console.log(studentlist2[i].name);
}





// 本日のチャレンジャー問題
// 5次元配列を作ってみましょう。
// 例：漫画のカテゴリーから、タイトル、登場人物、登場人物のプロフィール　等
// だんだん情報が詳細になるような形で作ってみてください
let book = [
	// ジャンプ
	[
	// ワンピース
		[
		// ルフィ
			[
			// 5
				['海賊','リーダー']
			],
		// バギー
			[
			// 5
				['海賊','カリスマ']
			]
		],
	// ドラゴンボール
		[
		// 悟空
			[
			// 5
				['サイヤ人','天才']
			],
		// ベジータ
			[
			// 5
				[],
			// 5
				[]
			]
		]
	],
	// 2
	[

	]
];