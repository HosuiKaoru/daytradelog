+++
date = '2025-08-17T14:11:17+09:00'
draft = false
title = '高速イナゴ戦略'
categories = ['ロング戦略']
+++

<b>大口の買い注文が入ったら追随ロング</b>  
大口の売買に反応する<span style="color: red;">「個人トレーダーの追随」</span>の勢いを利用する
<!--more-->

# 条件
1. 強い上昇が前提
2. 低位株で時価総額500億円未満の銘柄のみ
3. 厚い売り板を喰われるまでの過程で、下離れずに売り板に張り付いて膠着状態の時は最高のセットアップ
4. 大口が成行で買い上げた後、買い上げた値段近くまで指値の買いが即入ってくる時  
→買い上げた値段近くで成行即ロング
5. 大口が成行で買い上げた後、買い上げた値段近くまで指値の買いが即入ってこない時  
→一度下落する可能性が高いので板や歩み値で下げ止まりを確認し、なおかつ売り板を食うような動きがあってからロング
6. イグジットは大口が利食いしてきそうな所より少し早く行う  
a. 数tickの上昇では捌けないはずなので、ロット数から「だいだい〇〇tick上がる」と予想する。
これは経験則からくる勘なので言語化は難しい（目安は10tick）  
b. 板や歩み値を参考にイグジットラインを設定する  
c. 朝の高値を目指す形で大口が買ってきたら、高値に届く前で売り抜ける傾向がある
7. 損切りは大口価格の数tick下

# 成功例
<u>成功例① 2024/10/31　『7603』</u>  
1. 258円から263円まで買い上げられる
2. 一旦、255円まで下がる
3. 買いがどんどん入ってきて263円まで上がる
4. 更に上昇して276円の高値をつける
5. 一気に売りが出る（大口の利食い売り？）  

今回のケースは一旦下落するパターン  
売り板を食う動きがある買い上げた値段の258円あたりでロング  
10tick目安の268円で売り抜ける（当時の板を見れないのだが大口のロットから成行売りのタイミングを図る）
<div style="text-align: center;">
<img src="/images/inago/7603/1031-1minute.png" alt="イナゴ戦略の5分足" width="600" height="500">
<p style="margin-top: 5px; font-size: 0.9em; color: #555;">5分足</p>
</div>
<div style="text-align: center;">
<img src="/images/inago/7603/1031-day.png" alt="イナゴ戦略の日足" width="600" height="500">
<p style="margin-top: 5px; font-size: 0.9em; color: #555;">日足</p>
</div>
</div>

<u>成功例② 2025/07/01　『5618』</u>  
13:03:28に600の厚い売り板を25000株の大口買いで一気に喰われた  
そして、600まですぐに買いの指値注文が入ってきたので成行買い  
イグジットはストップ高の621の所  
なぜなら、買い板の厚さが平均1000株（概算）なので、大口の持ち株数的に20tick以上持ち上げないと利確できないから  
大口がオーバーナイト勢だったとしても当日の売り圧にはならないので買い優勢  
ちなみに翌日は8%GUしてからすぐに叩き売られて大陰線で引けた
<div style="display: flex; gap: 20px; justify-content: center; flex-wrap: wrap; margin-top: 30px;">
<div style="text-align: center;">
<img src="/images/inago/5618/0701-5minutes.png" alt="イナゴ戦略の5分足" width="350" height="400">
<p style="margin-top: 5px; font-size: 0.9em; color: #555;">5分足</p>
</div>
<div style="text-align: center;">
<img src="/images/inago/5618/0701-day.png" alt="イナゴ戦略の日足" width="250" height="400">
<p style="margin-top: 5px; font-size: 0.9em; color: #555;">日足</p>
</div>
</div>

<u>成功例③ 2025/06/30　『7273』</u>  
11:02:27に大口の20000株買いを確認して成行ロング  
イグジットは10tick抜きのところ（エントリーした陽線の中腹）  
なぜなら、板の厚さと大口の株数的に10~15tick上昇したら売ってくる可能性があったから  
予想通り12tickくらいで売られた  
朝一の高値付近まで行けば、自分みたいな雑魚トレーダーにババを渡せると考えて  
「ジリジリ上げ→大ロット買い→雑魚に売りつけ」が大口の一種の戦略パターンかな？  
高値更新してどんどん上昇するには板に十分な強さが必要ということだな  
もし大口買いに置いていかれたら必ず見逃そう
<div style="display: flex; gap: 20px; justify-content: center; flex-wrap: wrap; margin-top: 30px;">
<div style="text-align: center;">
<img src="/images/inago/7273/0630-5minutes.png" alt="イナゴ戦略の5分足" width="350" height="400">
<p style="margin-top: 5px; font-size: 0.9em; color: #555;">5分足</p>
</div>
<div style="text-align: center;">
<img src="/images/inago/7273/0630-day.png" alt="イナゴ戦略の日足" width="250" height="400">
<p style="margin-top: 5px; font-size: 0.9em; color: #555;">日足</p>
</div>
</div>

<u>成功例④ 2025/09/02　『2673』</u>  
9:17くらいから約10分間、厚い売り板が出ている250に喰らいついていた状況。  
50万株の厚い売り板を見て下に強く売られることはほぼなく、ひたすら張り付いていたという完璧なセットアップ。  
そして、歩み値からわかるように30万株以上の買いが入ってしっかりブレイクした。  
ブレイク後も一回落とすような動きはなく、251・252に厚い買い板がどんどん入ってきた。  
おそらくしっかり張り付いていたというセットアップがこれに関与してそうだな。  
板平均から15tickくらいは上げてくると考えられたが、完璧にその位置まで到達。  
やはり、利確位置は大口のロット数から割り出すのがよさそうね。  
<div style="display: flex; gap: 20px; justify-content: center; flex-wrap: wrap; margin-top: 30px;">
<div style="text-align: center;">
<img src="/images/dailylog/2673/0902-5minutes.png" alt="デイトレ記録の5分足" width="200" height="600">
<p style="margin-top: 5px; font-size: 0.9em; color: #555;">5分足</p>
</div>
<div style="text-align: center;">
<img src="/images/dailylog/2673/0902-day.png" alt="デイトレ記録の日足" width="200" height="600">
<p style="margin-top: 5px; font-size: 0.9em; color: #555;">日足</p>
</div>
<div style="text-align: center;">
<img src="/images/dailylog/2673/0902-ayumine.png" alt="デイトレ記録の歩み値" width="200" height="600">
<p style="margin-top: 5px; font-size: 0.9em; color: #555;">歩み値</p>
</div>
</div>