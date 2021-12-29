// $(function() {

//     let count = 0;
//     let point = 0;

//     //質問
//     const list = [
//         {
//             "title": "お笑い好きですか？",
//             "anser": [
//                 "大好き",
//                 "好き",
//                 "ちょっと好き"
//             ]
//         },
//         {
//             "title": "どの事務所推しですか？",
//             "anser": [
//                 "吉本興業",
//                 "人力舎",
//                 "サンミュージック"
//             ]
//         },
//         {
//             "title": "好きな芸人はいますか？",
//             "anser": [
//                 "チョコレートプラネット",
//                 "アイロンヘッド",
//                 "鈴木もぐら(空気階段)"
//             ]
//         },
//         {
//             "title": "今何問目ですか？",
//             "anser": [
//                 "４問目",
//                 "多分３問目",
//                 "教えて"
//             ]
//         },
//         {
//             "title": "チョコプラのどのネタが好きですか？",
//             "anser": [
//                 "悪い顔選手権",
//                 "IKKOと元彌",
//                 "１分間クッキング"
//             ]
//         },
//         {
//             "title": "お正月ですね",
//             "anser": [
//                 "良いお年を",
//                 "お餅食べたいな",
//                 "お年玉だるいな"
//             ]
//         }
//     ];

//     //ローカルストレージ
//     if(localStorage.getItem("shindan") === null) {
//         $("#kekka").text("まだありません。");
//     } else {
//         $("#kekka").text(localStorage.getItem("shindan"));
//     }

//     //
//     function render(count) {
//         $("li").remove();
//         $("h1").text(list[count]["title"]);
//         list[count]["anser"].forEach(function(text) {
//             const li = `<li>${text}</li>`;
//             $("ul").append(li);
//         });
//     }
//     render(0);

//     //ポイントゲット
//     function pointGet(li_index) {
//         switch(li_index) {
//             case 0:
//                 return 1;
//                 break;
//             case 1:
//                 return 0;
//                 break;
//             case 2:
//                 return -1;
//                 break;
//         }
//     }

//     //結果のコメント
//     function point_text(point) {
//         let text = "普通です!";
//         if(point > 4) {
//             text = "プロです!"
//             window.location.href = "laroidance.mp4";
//         }
//         if(point < 2) {
//             text = "人生損してます。"
//         }
//         return text;
//     }

//     //クリックした時の処理
//     $("body").on("click", "li", function() {
//         const li_index = $("li").index(this);
//         point += pointGet(li_index);
//         if(count < list.length - 1) {
//             count++;
//             render(count);
//             $("progress").val(100 / (list.length / count));
//         } else {
//             $("[data-point-num]").text(point_text(point));
//             localStorage.setItem("shindan", point_text(point));
//             $("ul, h1").hide();
//             $(".point").fadeIn();
//             $("progress").val(100);
//         }
//     });
// });