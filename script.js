const notes = {
  verbs: {
    title: "動詞與詞形",
    body: `<p>阿拉伯語動詞可以依照字根字母的特性分類。分析時，先找出詞根，再觀察詞形中是否有弱字母、重複字母或增字母。</p>
    <ul><li><strong>健全動詞（الفعل الصحيح）</strong>：詞根中沒有弱字母。</li><li><strong>病動詞（الفعل المعتل）</strong>：詞根中含有 ا、و 或 ي 等弱字母。</li><li><strong>增字母動詞（الفعل المزيد）</strong>：在基本詞根結構上增加字母，形成不同詞形或意義。</li><li><strong>詞根（الجذر）</strong>：構成單字核心意義的基本字母。</li><li><strong>詞形／ميزان صرفي</strong>：用 ف ع ل 作為基準，分析單字的字母配置。</li></ul>
    <p>複習提醒：不要只看單字外觀，應先辨認原始詞根，再判斷字母是否屬於詞根或增字母。</p>`
  },
  masdar: {
    title: "مصدر（動名詞）",
    body: `<p class="arabic">المَصْدَرُ اسْمٌ يَدُلُّ عَلَى الحَدَثِ دُونَ الزَّمَنِ.</p>
    <p>مصدر 表示動作或事件本身，不像動詞一樣直接表達過去、現在或未來的時態。中文可依上下文翻譯成「學習、閱讀、出發」等動作概念。</p>
    <ul><li>先找出句子中的動詞。</li><li>確認該動詞的詞根與詞形。</li><li>再依照動詞類型查找或判斷相對應的 مصدر。</li></ul>
    <p>注意：不同動詞的 مصدر 形式不一定能只靠一條規則推導，部分形式需要依教材或字典記憶。</p>`
  },
  vocab: {
    title: "單字複習",
    body: `<p>單字筆記建議固定使用「阿拉伯文、標音、詞性、中文意思、例句」五個欄位，日後新增內容時也維持相同格式。</p>
    <ul><li><span class="arabic">كِتَابٌ</span> — kitābun — 名詞：書</li><li><span class="arabic">مَدْرَسَةٌ</span> — madrasatun — 名詞：學校</li><li><span class="arabic">يَكْتُبُ</span> — y aktubu — 動詞：他寫／正在寫</li></ul>
    <p>複習時可先遮住中文意思自行回想，再用例句確認單字是否能實際運用。</p>`
  }
};
document.querySelectorAll("[data-topic]").forEach(button => {
  button.addEventListener("click", () => {
    const note = notes[button.dataset.topic];
    document.getElementById("note-content").innerHTML = `<h2>${note.title}</h2>${note.body}`;
    document.getElementById("notes").scrollIntoView({behavior:"smooth", block:"center"});
  });
});
