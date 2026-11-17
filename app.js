(function(){
"use strict";
var raw=[
'Số học|6-8|Tỉ số|a : b = a/b|b khác 0',
'Số học|6-8|Tỉ lệ phần trăm|p% = p/100|Đổi phần trăm sang phân số',
'Số học|6-8|Tính phần trăm|A = N × p/100|Tính p phần trăm của N',
'Số học|6-8|Tỉ lệ tăng giảm|p = (B − A)/A × 100%|A là giá trị ban đầu và phải lớn hơn 0. p dương là tăng, p âm là giảm.',
'Số học|6-8|Phép chia có dư|a = bq + r|0 ≤ r < b, b nguyên dương',
'Số học|6-8|Ước chung lớn nhất và bội chung nhỏ nhất|ƯCLN(a, b) × BCNN(a, b) = ab|a và b là số nguyên dương.',
'Số học|6-8|Cộng phân số|a/b + c/d = (ad+bc)/bd|b,d khác 0',
'Số học|6-8|Trừ phân số|a/b − c/d = (ad−bc)/bd|b,d khác 0',
'Số học|6-8|Nhân phân số|a/b × c/d = ac/bd|b,d khác 0',
'Số học|6-8|Chia phân số|(a/b):(c/d) = ad/bc|b,c,d khác 0',
'Số học|6-8|Phân số tương đương|a/b = ka/kb|k,b khác 0',
'Số học|6-9|Nhân hai lũy thừa|aᵐ × aⁿ = aᵐ⁺ⁿ|Cùng cơ số',
'Số học|6-9|Chia hai lũy thừa|aᵐ/aⁿ = aᵐ⁻ⁿ|a khác 0',
'Số học|6-9|Lũy thừa của lũy thừa|(aᵐ)ⁿ = aᵐⁿ|Quy tắc lũy thừa',
'Số học|7-9|Tỉ lệ thuận|y = kx|k là hệ số tỉ lệ',
'Số học|7-9|Tỉ lệ nghịch|y = a/x|x khác 0',
'Số học|11-12|Cấp số cộng|uₙ = u₁+(n−1)d|d là công sai',
'Số học|11-12|Tổng cấp số cộng|Sₙ = n(u₁+uₙ)/2|n số hạng đầu',
'Số học|11-12|Cấp số nhân|uₙ = u₁qⁿ⁻¹|q là công bội',
'Số học|11-12|Tổng cấp số nhân|Sₙ = u₁(1−qⁿ)/(1−q)|q khác 1',
'Số học|11-12|Lãi kép|A = P(1+r)ⁿ|r là lãi suất mỗi kỳ',
'Đại số|8-10|Bình phương tổng|(a+b)² = a²+2ab+b²|Hằng đẳng thức',
'Đại số|8-10|Bình phương hiệu|(a−b)² = a²−2ab+b²|Hằng đẳng thức',
'Đại số|8-10|Hiệu hai bình phương|a²−b² = (a−b)(a+b)|Phân tích nhân tử',
'Đại số|8-10|Lập phương tổng|(a+b)³ = a³+3a²b+3ab²+b³|Hằng đẳng thức',
'Đại số|8-10|Lập phương hiệu|(a−b)³ = a³−3a²b+3ab²−b³|Hằng đẳng thức',
'Đại số|8-10|Tổng hai lập phương|a³+b³ = (a+b)(a²−ab+b²)|Phân tích nhân tử',
'Đại số|8-10|Hiệu hai lập phương|a³−b³ = (a−b)(a²+ab+b²)|Phân tích nhân tử',
'Đại số|8-10|Phương trình bậc nhất|ax+b=0 ⇒ x=−b/a|a khác 0',
'Đại số|9-10|Biệt thức bậc hai|Δ=b²−4ac|Phương trình ax²+bx+c=0',
'Đại số|9-10|Nghiệm phương trình bậc hai|x=(−b±√Δ)/(2a)|a khác 0, Δ≥0 để có nghiệm thực',
'Đại số|9-10|Đỉnh parabol|I(−b/2a;−Δ/4a)|a khác 0',
'Đại số|9-10|Định lý Viète|x₁+x₂=−b/a; x₁x₂=c/a|a ≠ 0 và phương trình có hai nghiệm thực, tính cả nghiệm kép.',
'Đại số|9-12|Đường thẳng|y=mx+c|m hệ số góc; c tung độ gốc',
'Đại số|9-12|Căn của tích|√(ab)=√a×√b|a,b không âm',
'Đại số|9-12|Căn của thương|√(a/b)=√a/√b|a không âm, b dương',
'Đại số|11-12|Logarit của tích|logₐ(xy)=logₐx+logₐy|a>0, a≠1, x,y>0',
'Đại số|11-12|Logarit của thương|logₐ(x/y)=logₐx−logₐy|a>0, a≠1, x,y>0',
'Đại số|11-12|Logarit của lũy thừa|logₐ(xʳ)=r logₐx|a>0, a≠1, x>0',
'Đại số|11-12|Đổi cơ số logarit|logₐb=ln(b)/ln(a)|a,b>0, a≠1',
'Hình học phẳng|6-8|Chu vi hình vuông|P=4a|a là độ dài cạnh',
'Hình học phẳng|6-8|Diện tích hình vuông|S=a²|a là độ dài cạnh',
'Hình học phẳng|6-8|Chu vi chữ nhật|P=2(a+b)|a,b là hai cạnh',
'Hình học phẳng|6-8|Diện tích chữ nhật|S=ab|a,b là hai cạnh',
'Hình học phẳng|6-8|Diện tích tam giác|S=ah/2|a đáy, h đường cao',
'Hình học phẳng|6-8|Diện tích bình hành|S=ah|a đáy, h đường cao',
'Hình học phẳng|6-8|Diện tích hình thang|S=(a+b)h/2|a,b là hai đáy',
'Hình học phẳng|6-8|Diện tích hình thoi|S=d₁d₂/2|d₁,d₂ là đường chéo',
'Hình học phẳng|6-9|Chu vi đường tròn|C=2πr=πd|r bán kính, d đường kính',
'Hình học phẳng|6-9|Diện tích hình tròn|S=πr²|r là bán kính',
'Hình học phẳng|6-9|Tổng góc tam giác|A+B+C=180°|Ba góc trong tam giác',
'Hình học phẳng|6-9|Góc quanh một điểm|Σα=360°|Tổng các góc',
'Hình học phẳng|6-9|Góc kề bù|α+β=180°|Góc kề bù',
'Hình học phẳng|8-10|Pythagoras|a²+b²=c²|c là cạnh huyền',
'Hình học phẳng|9-10|Heron|S=√[p(p−a)(p−b)(p−c)]|p=(a+b+c)/2',
'Hình học phẳng|9-10|Độ dài cung tròn|l=πrα/180|α tính theo độ',
'Hình học phẳng|9-10|Diện tích hình quạt|S=πr²α/360|α tính theo độ',
'Hình học phẳng|9-10|Tổng góc đa giác|(n−2)×180°|n là số cạnh',
'Hình học phẳng|9-10|Góc ngoài đa giác đều|α=360°/n|n≥3',
'Hình học phẳng|9-10|Góc nội tiếp|∠AOB=2∠ACB|Cùng chắn một cung',
'Hình học phẳng|9-10|Tứ giác nội tiếp|A+C=B+D=180°|Các cặp góc đối bù nhau',
'Hình học không gian|8-12|Thể tích hình hộp|V=abc|Ba kích thước',
'Hình học không gian|8-12|Diện tích hình hộp|S=2(ab+bc+ca)|Toàn phần',
'Hình học không gian|8-12|Thể tích lập phương|V=a³|a là cạnh',
'Hình học không gian|8-12|Diện tích lập phương|S=6a²|Toàn phần',
'Hình học không gian|8-12|Thể tích lăng trụ|V=Sđáy×h|h chiều cao',
'Hình học không gian|8-12|Thể tích hình chóp|V=Sđáy×h/3|h chiều cao',
'Hình học không gian|9-12|Thể tích hình trụ|V=πr²h|r bán kính đáy',
'Hình học không gian|9-12|Diện tích xung quanh trụ|S=2πrh|h chiều cao',
'Hình học không gian|9-12|Diện tích toàn phần trụ|S=2πr(r+h)|r bán kính đáy',
'Hình học không gian|9-12|Thể tích hình nón|V=πr²h/3|h chiều cao',
'Hình học không gian|9-12|Diện tích xung quanh nón|S=πrl|l đường sinh',
'Hình học không gian|9-12|Thể tích hình cầu|V=4πr³/3|r bán kính',
'Hình học không gian|9-12|Diện tích mặt cầu|S=4πr²|r bán kính',
'Tọa độ|9-12|Khoảng cách hai điểm|AB=√[(x₂−x₁)²+(y₂−y₁)²]|Trong Oxy',
'Tọa độ|9-12|Trung điểm|M((x₁+x₂)/2;(y₁+y₂)/2)|Trung điểm AB',
'Tọa độ|9-12|Hệ số góc|m=(y₂−y₁)/(x₂−x₁)|x₂ khác x₁',
'Tọa độ|9-12|Đường thẳng qua điểm|y−y₁=m(x−x₁)|Hệ số góc m',
'Tọa độ|9-12|Đường thẳng tổng quát|Ax+By+C=0|A,B không đồng thời bằng 0',
'Tọa độ|10-12|Đường tròn| (x−a)²+(y−b)²=R² |R>0, tâm I(a;b)',
'Tọa độ|10-12|Cộng vectơ|(a;b)+(c;d)=(a+c;b+d)|Trong Oxy',
'Tọa độ|10-12|Tích vô hướng|u·v=x₁x₂+y₁y₂|Trong Oxy',
'Tọa độ|10-12|Độ dài vectơ||u|=√(x²+y²)|u=(x;y)',
'Tọa độ|10-12|Đường thẳng vuông góc|m₁m₂=−1|Khi hệ số góc đều xác định',
'Lượng giác|9-11|Sin góc nhọn|sin α=đối/huyền|Tam giác vuông',
'Lượng giác|9-11|Cos góc nhọn|cos α=kề/huyền|Tam giác vuông',
'Lượng giác|9-11|Tan góc nhọn|tan α=đối/kề|Tam giác vuông',
'Lượng giác|10-11|Hệ thức cơ bản|sin²x+cos²x=1|Mọi x thực',
'Lượng giác|10-11|Tan theo sin cos|tan x=sin x/cos x|cos x khác 0',
'Lượng giác|10-11|Sin tổng|sin(a+b)=sin a cos b+cos a sin b|Cộng góc',
'Lượng giác|10-11|Cos tổng|cos(a+b)=cos a cos b−sin a sin b|Cộng góc',
'Lượng giác|10-11|Sin góc đôi|sin 2x=2sin x cos x|Công thức nhân đôi',
'Lượng giác|10-11|Cos góc đôi|cos 2x=cos²x−sin²x|Công thức nhân đôi',
'Lượng giác|10-11|Định lý sin|a/sin A=b/sin B=c/sin C|Tam giác ABC',
'Lượng giác|10-11|Định lý cos|a²=b²+c²−2bc cos A|Tam giác ABC',
'Lượng giác|10-11|Diện tích theo sin|S=ab sin C/2|Góc C xen giữa a,b',
'Lượng giác|10-11|Đổi góc sang radian|rad=độ×π/180|Đổi đơn vị đo góc',
'Giải tích|11-12|Đạo hàm hằng số|(C)′=0|C hằng số',
'Giải tích|11-12|Đạo hàm lũy thừa|(xⁿ)′=nxⁿ⁻¹|Miền xác định phù hợp',
'Giải tích|11-12|Đạo hàm tổng|(u+v)′=u′+v′|Quy tắc đạo hàm',
'Giải tích|11-12|Đạo hàm tích|(uv)′=u′v+uv′|Quy tắc đạo hàm',
'Giải tích|11-12|Đạo hàm thương|(u/v)′=(u′v−uv′)/v²|v khác 0',
'Giải tích|11-12|Đạo hàm hàm hợp|(f(g(x)))′=f′(g(x))g′(x)|Quy tắc hàm hợp',
'Giải tích|11-12|Đạo hàm sin|(sin x)′=cos x|x theo radian',
'Giải tích|11-12|Đạo hàm cos|(cos x)′=−sin x|x theo radian',
'Giải tích|11-12|Đạo hàm hàm mũ|(eˣ)′=eˣ|Cơ số e',
'Giải tích|11-12|Đạo hàm ln|(ln|x|)′=1/x|x khác 0',
'Giải tích|11-12|Nguyên hàm lũy thừa|∫xⁿdx=xⁿ⁺¹/(n+1)+C|n khác −1',
'Giải tích|11-12|Nguyên hàm 1/x|∫dx/x=ln|x|+C|x khác 0',
'Giải tích|11-12|Nguyên hàm sin|∫sin xdx=−cos x+C|x theo radian',
'Giải tích|11-12|Nguyên hàm cos|∫cos xdx=sin x+C|x theo radian',
'Giải tích|11-12|Newton-Leibniz|∫ₐᵇ f(x)dx=F(b)−F(a)|F′=f',
'Xác suất – Thống kê|10-12|Trung bình cộng|x̄=(x₁+…+xₙ)/n|n>0',
'Xác suất – Thống kê|10-12|Trung bình có tần số|x̄=Σ(nᵢxᵢ)/Σnᵢ|nᵢ là tần số',
'Xác suất – Thống kê|10-12|Phương sai tổng thể|σ²=Σ(xᵢ−μ)²/n|μ là trung bình',
'Xác suất – Thống kê|10-12|Độ lệch chuẩn|σ=√σ²|Căn phương sai',
'Xác suất – Thống kê|10-12|Xác suất cổ điển|P(A)=n(A)/n(Ω)|Các kết quả đồng khả năng',
'Xác suất – Thống kê|10-12|Biến cố đối|P(Ā)=1−P(A)|Ā đối của A',
'Xác suất – Thống kê|10-12|Xác suất hợp|P(A∪B)=P(A)+P(B)−P(A∩B)|Quy tắc cộng',
'Xác suất – Thống kê|10-12|Độc lập|P(A∩B)=P(A)P(B)|A và B độc lập',
'Xác suất – Thống kê|10-12|Xác suất có điều kiện|P(A|B)=P(A∩B)/P(B)|P(B)>0',
'Xác suất – Thống kê|10-12|Giai thừa|n!=1×2×…×n|0!=1',
'Xác suất – Thống kê|10-12|Chỉnh hợp|A(n,k)=n!/(n−k)!|0≤k≤n',
'Xác suất – Thống kê|10-12|Tổ hợp|C(n,k)=n!/[k!(n−k)!]|0≤k≤n',
'Xác suất – Thống kê|10-12|Nhị thức Newton|(a+b)ⁿ=ΣC(n,k)aⁿ⁻ᵏbᵏ|k từ 0 đến n',
'Xác suất – Thống kê|10-12|Phân phối nhị thức|P(X=k)=C(n,k)pᵏ(1−p)ⁿ⁻ᵏ|n phép thử độc lập, cùng xác suất thành công p, với 0 ≤ k ≤ n.'
];
var formulaExamples = {
  "Tỉ số": [
    "a = 6, b = 4.",
    "6 : 4 = 6/4 = 3/2."
  ],
  "Tỉ lệ phần trăm": [
    "Viết 25% dưới dạng phân số.",
    "25% = 25/100 = 1/4."
  ],
  "Tính phần trăm": [
    "Tính 20% của 250.",
    "250 × 20/100 = 50."
  ],
  "Tỉ lệ tăng giảm": [
    "Giá ban đầu 80, giá mới 100.",
    "(100 − 80)/80 × 100% = 25%. Giá tăng 25%."
  ],
  "Phép chia có dư": [
    "Chia 29 cho 5.",
    "29 = 5 × 5 + 4. Thương là 5, số dư là 4."
  ],
  "Ước chung lớn nhất và bội chung nhỏ nhất": [
    "a = 84, b = 30, ƯCLN = 6.",
    "BCNN = 84 × 30 ÷ 6 = 420."
  ],
  "Cộng phân số": [
    "Cộng 2/3 với 1/4.",
    "(2 × 4 + 3 × 1)/(3 × 4) = 11/12."
  ],
  "Trừ phân số": [
    "Trừ 1/4 khỏi 2/3.",
    "(2 × 4 − 3 × 1)/(3 × 4) = 5/12."
  ],
  "Nhân phân số": [
    "Nhân 2/3 với 1/4.",
    "(2 × 1)/(3 × 4) = 1/6."
  ],
  "Chia phân số": [
    "Chia 2/3 cho 1/4.",
    "2/3 × 4/1 = 8/3."
  ],
  "Phân số tương đương": [
    "Phân số 2/3, nhân cả tử và mẫu với 4.",
    "(2 × 4)/(3 × 4) = 8/12, có cùng giá trị với 2/3."
  ],
  "Nhân hai lũy thừa": [
    "Tính 2³ × 2².",
    "Cùng cơ số 2, cộng số mũ. 2³ × 2² = 2⁵ = 32."
  ],
  "Chia hai lũy thừa": [
    "Tính 2⁵ ÷ 2².",
    "Cùng cơ số 2, trừ số mũ. 2⁵ ÷ 2² = 2³ = 8."
  ],
  "Lũy thừa của lũy thừa": [
    "Tính (2³)².",
    "Nhân hai số mũ. (2³)² = 2⁶ = 64."
  ],
  "Tỉ lệ thuận": [
    "Hệ số k = 3, x = 5.",
    "y = 3 × 5 = 15."
  ],
  "Tỉ lệ nghịch": [
    "Hệ số a = 24, x = 6.",
    "y = 24/6 = 4."
  ],
  "Cấp số cộng": [
    "u₁ = 2, công sai d = 3, tìm u₅.",
    "u₅ = 2 + (5 − 1) × 3 = 14."
  ],
  "Tổng cấp số cộng": [
    "u₁ = 2, u₅ = 14, n = 5.",
    "S₅ = 5 × (2 + 14)/2 = 40."
  ],
  "Cấp số nhân": [
    "u₁ = 3, công bội q = 2, tìm u₄.",
    "u₄ = 3 × 2³ = 24."
  ],
  "Tổng cấp số nhân": [
    "u₁ = 3, q = 2, n = 4.",
    "S₄ = 3 × (1 − 2⁴)/(1 − 2) = 45."
  ],
  "Lãi kép": [
    "Ví dụ toán học với P = 1.000, r = 0,1 mỗi kỳ, n = 2 kỳ.",
    "A = 1.000 × (1 + 0,1)² = 1.210."
  ],
  "Bình phương tổng": [
    "Khai triển (x + 3)².",
    "x² + 2 × x × 3 + 3² = x² + 6x + 9."
  ],
  "Bình phương hiệu": [
    "Khai triển (x − 3)².",
    "x² − 2 × x × 3 + 3² = x² − 6x + 9."
  ],
  "Hiệu hai bình phương": [
    "Phân tích x² − 9.",
    "x² − 3² = (x − 3)(x + 3)."
  ],
  "Lập phương tổng": [
    "Khai triển (x + 2)³.",
    "x³ + 3x² × 2 + 3x × 2² + 2³ = x³ + 6x² + 12x + 8."
  ],
  "Lập phương hiệu": [
    "Khai triển (x − 2)³.",
    "x³ − 3x² × 2 + 3x × 2² − 2³ = x³ − 6x² + 12x − 8."
  ],
  "Tổng hai lập phương": [
    "Phân tích x³ + 8.",
    "x³ + 2³ = (x + 2)(x² − 2x + 4)."
  ],
  "Hiệu hai lập phương": [
    "Phân tích x³ − 8.",
    "x³ − 2³ = (x − 2)(x² + 2x + 4)."
  ],
  "Phương trình bậc nhất": [
    "Giải 3x − 12 = 0. Hệ số a = 3, b = −12.",
    "x = −(−12)/3 = 4."
  ],
  "Biệt thức bậc hai": [
    "x² − 5x + 6 = 0. a = 1, b = −5, c = 6.",
    "Δ = (−5)² − 4 × 1 × 6 = 1."
  ],
  "Nghiệm phương trình bậc hai": [
    "x² − 5x + 6 = 0, có Δ = 1.",
    "x = (5 ± √1)/2. Hai nghiệm là 3 và 2."
  ],
  "Đỉnh parabol": [
    "y = x² − 2x − 3, có Δ = 16.",
    "xᵢ = −(−2)/(2 × 1) = 1. yᵢ = −16/(4 × 1) = −4. Vậy I(1; −4)."
  ],
  "Định lý Viète": [
    "x² − 5x + 6 = 0 có hai nghiệm thực.",
    "Tổng là −(−5)/1 = 5. Tích là 6/1 = 6. Hai nghiệm 2 và 3 thỏa cả hai hệ thức."
  ],
  "Đường thẳng": [
    "Hệ số góc m = 2, tung độ gốc c = 1.",
    "y = 2x + 1. Khi x = 3, y = 7, nên (3; 7) nằm trên đường thẳng."
  ],
  "Căn của tích": [
    "Tính √(4 × 9).",
    "√4 × √9 = 2 × 3 = 6."
  ],
  "Căn của thương": [
    "Tính √(9/16).",
    "√9/√16 = 3/4."
  ],
  "Logarit của tích": [
    "Tính log₂(4 × 8).",
    "log₂4 + log₂8 = 2 + 3 = 5."
  ],
  "Logarit của thương": [
    "Tính log₂(32/4).",
    "log₂32 − log₂4 = 5 − 2 = 3."
  ],
  "Logarit của lũy thừa": [
    "Tính log₂(4³).",
    "3 × log₂4 = 3 × 2 = 6."
  ],
  "Đổi cơ số logarit": [
    "Tính log₂8 bằng ln.",
    "ln(8)/ln(2) = 3, vì 8 = 2³."
  ],
  "Chu vi hình vuông": [
    "Cạnh a = 6 cm.",
    "P = 4 × 6 = 24 cm."
  ],
  "Diện tích hình vuông": [
    "Cạnh a = 6 cm.",
    "S = 6² = 36 cm²."
  ],
  "Chu vi chữ nhật": [
    "Chiều dài 6 cm, chiều rộng 4 cm.",
    "P = 2 × (6 + 4) = 20 cm."
  ],
  "Diện tích chữ nhật": [
    "Chiều dài 6 cm, chiều rộng 4 cm.",
    "S = 6 × 4 = 24 cm²."
  ],
  "Diện tích tam giác": [
    "Đáy 6 cm, đường cao ứng với đáy 3 cm.",
    "S = 6 × 3/2 = 9 cm²."
  ],
  "Diện tích bình hành": [
    "Đáy 6 cm, chiều cao ứng với đáy 3 cm.",
    "S = 6 × 3 = 18 cm²."
  ],
  "Diện tích hình thang": [
    "Hai đáy 6 cm và 4 cm, chiều cao 3 cm.",
    "S = (6 + 4) × 3/2 = 15 cm²."
  ],
  "Diện tích hình thoi": [
    "Hai đường chéo dài 8 cm và 6 cm.",
    "S = 8 × 6/2 = 24 cm²."
  ],
  "Chu vi đường tròn": [
    "Bán kính 5 cm, đường kính 10 cm.",
    "C = 2π × 5 = 10π cm ≈ 31,42 cm."
  ],
  "Diện tích hình tròn": [
    "Bán kính 5 cm.",
    "S = π × 5² = 25π cm² ≈ 78,54 cm²."
  ],
  "Tổng góc tam giác": [
    "Hai góc của tam giác là 50° và 60°.",
    "Góc còn lại = 180° − 50° − 60° = 70°."
  ],
  "Góc quanh một điểm": [
    "Ba góc liên tiếp phủ kín quanh một điểm. Hai góc đầu là 90° và 140°.",
    "Góc thứ ba = 360° − 90° − 140° = 130°."
  ],
  "Góc kề bù": [
    "Hai góc kề bù. Góc α = 65°.",
    "β = 180° − 65° = 115°."
  ],
  "Pythagoras": [
    "Tam giác vuông có hai cạnh góc vuông 3 cm và 4 cm.",
    "c = √(3² + 4²) = √25 = 5 cm."
  ],
  "Heron": [
    "Ba cạnh 3 cm, 4 cm và 5 cm.",
    "p = (3 + 4 + 5)/2 = 6 cm. S = √[6 × 3 × 2 × 1] = 6 cm²."
  ],
  "Độ dài cung tròn": [
    "Bán kính 6 cm, góc ở tâm 60°.",
    "l = π × 6 × 60/180 = 2π cm."
  ],
  "Diện tích hình quạt": [
    "Bán kính 6 cm, góc ở tâm 60°.",
    "S = π × 6² × 60/360 = 6π cm²."
  ],
  "Tổng góc đa giác": [
    "Ngũ giác đơn có n = 5.",
    "Tổng góc trong = (5 − 2) × 180° = 540°."
  ],
  "Góc ngoài đa giác đều": [
    "Lục giác đều có n = 6.",
    "Mỗi góc ngoài = 360°/6 = 60°."
  ],
  "Góc nội tiếp": [
    "Góc ở tâm chắn cùng cung với góc nội tiếp và bằng 100°.",
    "Góc nội tiếp = 100°/2 = 50°."
  ],
  "Tứ giác nội tiếp": [
    "Một góc trong tứ giác nội tiếp là 110°.",
    "Góc đối diện = 180° − 110° = 70°."
  ],
  "Thể tích hình hộp": [
    "Hộp chữ nhật có ba kích thước 4 cm, 3 cm và 6 cm.",
    "V = 4 × 3 × 6 = 72 cm³."
  ],
  "Diện tích hình hộp": [
    "Hộp chữ nhật có ba kích thước 4 cm, 3 cm và 6 cm.",
    "S = 2 × (4 × 3 + 3 × 6 + 6 × 4) = 108 cm²."
  ],
  "Thể tích lập phương": [
    "Cạnh 4 cm.",
    "V = 4³ = 64 cm³."
  ],
  "Diện tích lập phương": [
    "Cạnh 4 cm.",
    "S = 6 × 4² = 96 cm²."
  ],
  "Thể tích lăng trụ": [
    "Diện tích đáy 12 cm², chiều cao 6 cm.",
    "V = 12 × 6 = 72 cm³."
  ],
  "Thể tích hình chóp": [
    "Diện tích đáy 12 cm², chiều cao 6 cm.",
    "V = 12 × 6/3 = 24 cm³."
  ],
  "Thể tích hình trụ": [
    "Bán kính đáy 3 cm, chiều cao 6 cm.",
    "V = π × 3² × 6 = 54π cm³."
  ],
  "Diện tích xung quanh trụ": [
    "Bán kính đáy 3 cm, chiều cao 6 cm.",
    "S = 2π × 3 × 6 = 36π cm²."
  ],
  "Diện tích toàn phần trụ": [
    "Bán kính đáy 3 cm, chiều cao 6 cm.",
    "S = 2π × 3 × (3 + 6) = 54π cm²."
  ],
  "Thể tích hình nón": [
    "Bán kính đáy 3 cm, chiều cao 6 cm.",
    "V = π × 3² × 6/3 = 18π cm³."
  ],
  "Diện tích xung quanh nón": [
    "Bán kính đáy 3 cm, đường sinh 5 cm.",
    "S = π × 3 × 5 = 15π cm²."
  ],
  "Thể tích hình cầu": [
    "Bán kính 3 cm.",
    "V = 4π × 3³/3 = 36π cm³."
  ],
  "Diện tích mặt cầu": [
    "Bán kính 3 cm.",
    "S = 4π × 3² = 36π cm²."
  ],
  "Khoảng cách hai điểm": [
    "A(1; 2), B(5; 10).",
    "AB = √[(5 − 1)² + (10 − 2)²] = √80 = 4√5."
  ],
  "Trung điểm": [
    "A(1; 2), B(5; 10).",
    "M((1 + 5)/2; (2 + 10)/2) = M(3; 6)."
  ],
  "Hệ số góc": [
    "A(1; 2), B(5; 10).",
    "m = (10 − 2)/(5 − 1) = 2."
  ],
  "Đường thẳng qua điểm": [
    "Đi qua A(1; 2) và có hệ số góc m = 2.",
    "y − 2 = 2(x − 1), rút gọn được y = 2x."
  ],
  "Đường thẳng tổng quát": [
    "Phương trình 2x − y + 1 = 0. Kiểm tra P(1; 3).",
    "2 × 1 − 3 + 1 = 0 nên P thuộc đường thẳng."
  ],
  "Đường tròn": [
    "Tâm I(2; −1), bán kính 3.",
    "(x − 2)² + (y + 1)² = 9."
  ],
  "Cộng vectơ": [
    "u = (2; 3), v = (−1; 4).",
    "u + v = (2 − 1; 3 + 4) = (1; 7)."
  ],
  "Tích vô hướng": [
    "u = (2; 3), v = (−1; 4).",
    "u · v = 2 × (−1) + 3 × 4 = 10."
  ],
  "Độ dài vectơ": [
    "u = (3; 4).",
    "|u| = √(3² + 4²) = 5."
  ],
  "Đường thẳng vuông góc": [
    "Hai đường thẳng có hệ số góc 2 và −1/2.",
    "2 × (−1/2) = −1, nên hai đường vuông góc."
  ],
  "Sin góc nhọn": [
    "Tam giác vuông, cạnh đối góc α dài 3, cạnh huyền dài 5.",
    "sin α = 3/5 = 0,6."
  ],
  "Cos góc nhọn": [
    "Tam giác vuông, cạnh kề góc α dài 4, cạnh huyền dài 5.",
    "cos α = 4/5 = 0,8."
  ],
  "Tan góc nhọn": [
    "Tam giác vuông, cạnh đối góc α dài 3, cạnh kề dài 4.",
    "tan α = 3/4 = 0,75."
  ],
  "Hệ thức cơ bản": [
    "x = 30°, sin x = 1/2 và cos x = √3/2.",
    "sin²x + cos²x = 1/4 + 3/4 = 1."
  ],
  "Tan theo sin cos": [
    "x = 45°, sin x = cos x = √2/2.",
    "tan x = (√2/2)/(√2/2) = 1."
  ],
  "Sin tổng": [
    "a = 30°, b = 60°.",
    "sin(30° + 60°) = (1/2)(1/2) + (√3/2)(√3/2) = 1."
  ],
  "Cos tổng": [
    "a = 30°, b = 60°.",
    "cos(30° + 60°) = (√3/2)(1/2) − (1/2)(√3/2) = 0."
  ],
  "Sin góc đôi": [
    "x = 30°.",
    "sin 60° = 2 × (1/2) × (√3/2) = √3/2."
  ],
  "Cos góc đôi": [
    "x = 30°.",
    "cos 60° = (√3/2)² − (1/2)² = 1/2."
  ],
  "Định lý sin": [
    "Góc A = 30°, B = 90°, cạnh a đối góc A dài 3 cm.",
    "b = 3 × sin 90°/sin 30° = 6 cm."
  ],
  "Định lý cos": [
    "b = 3 cm, c = 4 cm, góc xen giữa A = 90°.",
    "a = √(3² + 4² − 2 × 3 × 4 × cos 90°) = 5 cm."
  ],
  "Diện tích theo sin": [
    "Hai cạnh dài 6 cm và 4 cm, góc xen giữa 30°.",
    "S = 6 × 4 × (1/2)/2 = 6 cm²."
  ],
  "Đổi góc sang radian": [
    "Đổi 30° sang radian.",
    "30 × π/180 = π/6 rad ≈ 0,5236 rad."
  ],
  "Đạo hàm hằng số": [
    "f(x) = 7.",
    "Giá trị không đổi theo x nên f′(x) = 0 ở mọi x."
  ],
  "Đạo hàm lũy thừa": [
    "f(x) = 2x³ + 1. Tính f′(2).",
    "f′(x) = 2 × 3x² = 6x². Vậy f′(2) = 24."
  ],
  "Đạo hàm tổng": [
    "f(x) = x³ + 2x.",
    "Lấy đạo hàm từng hạng tử. f′(x) = 3x² + 2."
  ],
  "Đạo hàm tích": [
    "f(x) = x² sin x, x tính theo radian.",
    "f′(x) = 2x sin x + x² cos x."
  ],
  "Đạo hàm thương": [
    "f(x) = x/(x + 1), x ≠ −1.",
    "f′(x) = [(x + 1) − x]/(x + 1)² = 1/(x + 1)²."
  ],
  "Đạo hàm hàm hợp": [
    "f(x) = (2x + 1)³.",
    "Đạo hàm hàm ngoài là 3(2x + 1)². Nhân đạo hàm hàm trong là 2, được 6(2x + 1)²."
  ],
  "Đạo hàm sin": [
    "f(x) = sin x. Tính f′(π/3).",
    "f′(π/3) = cos(π/3) = 1/2."
  ],
  "Đạo hàm cos": [
    "f(x) = cos x. Tính f′(π/2).",
    "f′(π/2) = −sin(π/2) = −1."
  ],
  "Đạo hàm hàm mũ": [
    "f(x) = eˣ. Tính f′(0).",
    "f′(0) = e⁰ = 1."
  ],
  "Đạo hàm ln": [
    "f(x) = ln|x|. Tính f′(−2).",
    "f′(−2) = 1/(−2) = −1/2."
  ],
  "Nguyên hàm lũy thừa": [
    "Tìm nguyên hàm của x³.",
    "∫x³ dx = x⁴/4 + C. Lấy đạo hàm x⁴/4 được x³."
  ],
  "Nguyên hàm 1/x": [
    "Tìm nguyên hàm của 1/x trên khoảng (0; +∞).",
    "∫dx/x = ln x + C trên khoảng dương."
  ],
  "Nguyên hàm sin": [
    "Tìm nguyên hàm của 2 sin x.",
    "∫2 sin x dx = −2 cos x + C."
  ],
  "Nguyên hàm cos": [
    "Tìm nguyên hàm của 3 cos x.",
    "∫3 cos x dx = 3 sin x + C."
  ],
  "Newton-Leibniz": [
    "Tính tích phân của 2x từ 0 đến 3.",
    "Chọn F(x) = x². Giá trị tích phân = F(3) − F(0) = 9."
  ],
  "Trung bình cộng": [
    "Dãy 2, 4, 4, 4, 5, 5, 7, 9.",
    "Tổng bằng 40. Trung bình = 40/8 = 5."
  ],
  "Trung bình có tần số": [
    "Giá trị 2 lặp 1 lần, 4 lặp 3 lần, 6 lặp 2 lần.",
    "x̄ = (2 × 1 + 4 × 3 + 6 × 2)/(1 + 3 + 2) = 13/3."
  ],
  "Phương sai tổng thể": [
    "Dãy 2, 4, 6 có trung bình 4.",
    "σ² = [(2 − 4)² + (4 − 4)² + (6 − 4)²]/3 = 8/3."
  ],
  "Độ lệch chuẩn": [
    "Phương sai tổng thể σ² = 9.",
    "σ = √9 = 3."
  ],
  "Xác suất cổ điển": [
    "Gieo một xúc xắc cân đối. A là biến cố ra mặt chẵn.",
    "Có 3 kết quả thuận lợi trên 6 kết quả đồng khả năng. P(A) = 3/6 = 1/2."
  ],
  "Biến cố đối": [
    "Xác suất trời mưa trong bài toán là 0,3.",
    "Xác suất không mưa là 1 − 0,3 = 0,7."
  ],
  "Xác suất hợp": [
    "P(A) = 0,5, P(B) = 0,4, P(A ∩ B) = 0,2.",
    "P(A ∪ B) = 0,5 + 0,4 − 0,2 = 0,7."
  ],
  "Độc lập": [
    "A và B độc lập, P(A) = 0,5, P(B) = 0,4.",
    "P(A ∩ B) = 0,5 × 0,4 = 0,2."
  ],
  "Xác suất có điều kiện": [
    "P(A ∩ B) = 0,2, P(B) = 0,4.",
    "P(A|B) = 0,2/0,4 = 0,5."
  ],
  "Giai thừa": [
    "Tính 6!.",
    "6! = 1 × 2 × 3 × 4 × 5 × 6 = 720."
  ],
  "Chỉnh hợp": [
    "Chọn và xếp thứ tự 2 bạn từ 6 bạn.",
    "A(6,2) = 6!/4! = 6 × 5 = 30."
  ],
  "Tổ hợp": [
    "Chọn 2 bạn từ 6 bạn, không xét thứ tự.",
    "C(6,2) = 6!/(2! × 4!) = 15."
  ],
  "Nhị thức Newton": [
    "Khai triển (x + 1)³.",
    "Các hệ số là 1, 3, 3, 1. Kết quả x³ + 3x² + 3x + 1."
  ],
  "Phân phối nhị thức": [
    "Tung đồng xu cân đối 6 lần độc lập. Tìm xác suất được đúng 2 mặt ngửa.",
    "P(X = 2) = C(6,2) × (1/2)² × (1/2)⁴ = 15/64 ≈ 0,234375."
  ]
};
var formulas=raw.map(function(row,id){
  var parts=row.split('|');
  var note=parts.pop();
  // The formula can contain vertical bars for absolute value or conditional probability.
  return {id:id,group:parts[0],title:parts[2],expr:parts.slice(3).join('|'),note:note};
});
var tools=[
['expression','=','Máy tính biểu thức','Phép toán, căn, lũy thừa'],
['fraction','⅟','Máy tính phân số','Cộng, trừ, nhân, chia phân số'],
['percent','%','Máy tính phần trăm','Tỉ lệ, tăng và giảm'],
['linear','x','Phương trình bậc nhất','Giải ax+b=0'],
['quadratic','x²','Phương trình bậc hai','Giải ax²+bx+c=0'],
['system','{}','Hệ phương trình hai ẩn','Giải hệ tuyến tính 2×2'],
['geometry','△','Diện tích và chu vi','Hình học phẳng cơ bản'],
['solid','⬡','Thể tích và diện tích','Các khối hình học cơ bản'],
['pythag','∟','Định lý Pythagoras','Tính cạnh tam giác vuông'],
['coordinate','⌖','Tọa độ hai điểm','Khoảng cách, trung điểm, hệ số góc'],
['statistics','▥','Thống kê dữ liệu','Trung bình, trung vị, phương sai'],
['combination','n!','Tổ hợp và xác suất','Giai thừa, chỉnh hợp, tổ hợp'],
['trig','θ','Máy tính lượng giác','Sin, cos, tan và đổi góc'],
['logarithm','log','Lũy thừa và logarit','Log, ln, căn và lũy thừa'],
['graph','⌁','Đồ thị hàm số','Vẽ đồ thị bậc nhất, bậc hai'],
['number','ℕ','Công cụ số nguyên','ƯCLN, BCNN và phân tích nguyên tố'],
['unit','⇆','Chuyển đổi đơn vị','Độ dài, khối lượng, thời gian'],
['time','◷','Thời gian và góc đồng hồ','Tính thời gian và góc kim đồng hồ'],
['heron','△','Tam giác theo ba cạnh','Tính diện tích Heron, chu vi và phân loại tam giác'],
['frequency','▥','Bảng tần số','Tính tổng tần số, trung bình và phương sai'],
['derivative','f′','Đạo hàm lũy thừa','Tính đạo hàm và hệ số góc tiếp tuyến tại một điểm']
].map(function(t){return {id:t[0],icon:t[1],title:t[2],desc:t[3]};});
var state={page:'home',mode:'number',suite:'',cat:'all',query:'',tool:'',favs:[]};
try{state.favs=JSON.parse(localStorage.getItem('mathlab-favs-v1')||'[]');if(!Array.isArray(state.favs))state.favs=[];}catch(e){state.favs=[];}
try{if(localStorage.getItem('gdvn-math-mode')==='geometry')state.mode='geometry';}catch(e){}
var app=document.getElementById('app'),search=document.getElementById('search-input');
function esc(s){return String(s===undefined?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}
function fmt(n){if(typeof n==='string')return n;if(!Number.isFinite(n))return 'Không xác định';if(n!==0&&(Math.abs(n)>=1e13||Math.abs(n)<1e-8))return n.toExponential(7);return new Intl.NumberFormat('vi-VN',{maximumFractionDigits:9}).format(Number(n.toPrecision(12)));}
function activeNav(){
  document.querySelectorAll('.nav [data-view]').forEach(function(button){
    var active=button.dataset.view===(state.page==='search'?'home':state.page);
    button.classList.toggle('active',active);
    if(active)button.setAttribute('aria-current','page');else button.removeAttribute('aria-current');
  });

  var currentSuite=state.page==='original-suite'?state.suite:state.page==='original'?originalTools.find(tool=>tool.id===state.suite)?.suite.base:'';
  document.querySelectorAll('#pinned-suites-nav [data-original-suite]').forEach(button=>{
    var suite=originalSuites.find(item=>item.base===button.dataset.originalSuite);
    button.hidden=!suiteInMode(suite);
    var active=button.dataset.originalSuite===currentSuite;
    button.classList.toggle('active',active);
    if(active)button.setAttribute('aria-current','true');
    else button.removeAttribute('aria-current');
  });
  var trail=document.getElementById('top-title');
  document.getElementById('board-nav-label').textContent=state.mode==='geometry'?'Bảng dựng hình':'Bàn tính công thức';
  trail.hidden=state.page==='home'||state.page==='search';
  document.getElementById('trail-home').textContent=modeLabel();
  document.getElementById('trail-current').textContent={formulas:'Thư viện công thức',tools:'Công cụ tính toán',favorites:'Đã lưu',original:'Bộ công cụ gốc','original-suite':'Bộ công cụ gốc',calculator:'Máy tính khoa học','geometry-lab':'Thao tác hình học','geometry-models':'Mô hình hình học',board:state.mode==='geometry'?'Bảng dựng hình':'Bàn tính công thức'}[state.page]||'';
  document.getElementById('geometry-nav').hidden=state.mode!=='geometry';
  document.querySelectorAll('[data-mode]').forEach(function(button){
    button.setAttribute('aria-pressed',String(button.dataset.mode===state.mode));
  });
  document.getElementById('go-back').disabled=!backStack.length;
}
var backStack=[];

var topics=[
  {title:'Số học', tools:['expression','fraction','percent','number'], preview:'fraction', summary:'Phân số, phần trăm, ước và bội'},
  {title:'Đại số', tools:['linear','quadratic','system','graph','logarithm'], preview:'graph', summary:'Phương trình, đồ thị, lũy thừa và logarit'},
  {title:'Lượng giác', tools:['trig'], preview:'trig', summary:'Sin, cos, tan và đổi đơn vị góc'},
  {title:'Giải tích', tools:['derivative'], preview:'derivative', summary:'Đạo hàm và hệ số góc tiếp tuyến'},
  {title:'Xác suất – Thống kê', tools:['combination','statistics','frequency'], preview:'statistics', summary:'Tổ hợp, xác suất, trung bình và tần số'},
  {title:'Hình học phẳng', geometry:true, tools:['geometry','pythag','heron'], preview:'heron', summary:'Độ dài, góc, chu vi và diện tích'},
  {title:'Hình học không gian', geometry:true, tools:['solid'], preview:'solid', summary:'Thể tích và diện tích bề mặt'},
  {title:'Tọa độ', geometry:true, tools:['coordinate'], preview:'coordinate', summary:'Khoảng cách, trung điểm và đường thẳng'},
  {title:'Đo lường', geometry:true, tools:['unit','time'], preview:'unit', summary:'Chuyển đổi đơn vị và tính thời lượng'}
];
function inMode(isGeometry){return isGeometry===(state.mode==='geometry');}
function modeLabel(){return state.mode==='geometry'?'Toán hình':'Toán số';}
function modeTopics(){return topics.filter(topic=>inMode(Boolean(topic.geometry)));}
function toolInMode(tool){return modeTopics().some(topic=>topic.tools.includes(tool.id));}

function topicSections(toolItems,formulaItems,focusedTopic,suiteItems=[]){
  var heading=focusedTopic?'h1':'h2';
  return modeTopics().map((topic,i)=>{
    var groupTools=toolItems.filter(tool=>topic.tools.includes(tool.id));
    var groupFormulas=formulaItems.filter(formula=>formula.group===topic.title);
    var groupSuites=suiteItems.filter(tool=>tool.topic===topic.title);
    if(!groupTools.length&&!groupFormulas.length&&!groupSuites.length)return '';
    return '<section class="topic-section topic-tone-'+(i%4)+'"><header class="topic-section-head"><'+heading+'>'+esc(topic.title)+'</'+heading+'></header>'+
      originalToolGroups(groupSuites)+
      (groupTools.length?'<div class="topic-content">'+(groupFormulas.length||focusedTopic?'<h3>Công cụ tính</h3>':'')+'<div class="tool-cards">'+groupTools.map(boxCard).join('')+'</div></div>':'')+
      (groupFormulas.length?'<div class="topic-content">'+(groupTools.length||groupSuites.length?'<h3>Công thức</h3>':'')+'<div class="formula-grid">'+groupFormulas.map(formulaCard).join('')+'</div></div>':'')+'</section>';
  }).join('');
}
function boxCard(t){
  return '<article class="tool-card"><div class="card-copy"><h3>'+esc(t.title)+'</h3><p>'+esc(t.desc)+'</p></div>'+
    '<figure class="card-preview"><canvas width="300" height="240" data-preview="'+t.id+'" aria-hidden="true"></canvas></figure>'+
    '<button class="card-launch" data-tool="'+t.id+'" aria-label="Mở '+esc(t.title)+'">Mở</button></article>';
}
function drawCardPreviews(){
  app.querySelectorAll('[data-preview]').forEach(function(canvas){
    var ctx=canvas.getContext('2d'),id=canvas.dataset.preview;
    ctx.scale(2,2);
    var blue='#226ed2',ink='#172d4e',red='#db5063',green='#149979';
    function line(points,color,width){
      ctx.beginPath();
      points.forEach(function(point,i){if(i)ctx.lineTo(...point);else ctx.moveTo(...point);});
      ctx.strokeStyle=color||blue;ctx.lineWidth=width||1.8;ctx.stroke();
    }
    function text(value,x,y,size,color){
      ctx.textAlign='center';ctx.textBaseline='middle';ctx.font='600 '+(size||14)+'px system-ui';
      ctx.fillStyle=color||ink;ctx.fillText(value,x,y);
    }
    function rect(x,y,w,h,fill){ctx.fillStyle=fill;ctx.fillRect(x,y,w,h);}
    function dot(x,y,color){ctx.fillStyle=color;ctx.beginPath();ctx.arc(x,y,3,0,Math.PI*2);ctx.fill();}
    function axes(){
      for(var n=15;n<150;n+=15)line([[n,8],[n,108]],'#e2eaf7',.6);
      for(var n=12;n<120;n+=15)line([[10,n],[141,n]],'#e2eaf7',.6);
      line([[10,75],[141,75]],'#879ab6',1);line([[75,9],[75,106]],'#879ab6',1);
    }
    if(id==='angle-lab'){
      ctx.beginPath();ctx.arc(75,60,44,0,2*Math.PI);ctx.strokeStyle='#69ddeb';ctx.lineWidth=1.6;ctx.stroke();
      var first=[107,30],second=[107,90],third=[36,40];
      line([first,third,second],'#a0cfff',2);line([first,[75,60],second],'#f9bf7d',2);
      [first,second,third].forEach(function(p){dot(p[0],p[1],'#ffffff');});
      dot(75,60,'#f9bf7d');
      text('α',54,46,13,'#bdf6fb');text('2α',91,62,13,'#ffe3ac');
    }else if(id==='circle-chord'){
      ctx.beginPath();ctx.arc(73,60,44,0,2*Math.PI);ctx.strokeStyle='#80a7d6';ctx.lineWidth=1.7;ctx.stroke();
      line([[40,31],[107,32],[88,101],[40,31]],blue,2);
      [[40,31],[107,32],[88,101]].forEach(function(point){dot(point[0],point[1],red);});
    }else if(['rectangle','parallelogram','trapezium'].includes(id)){
      var topEdge={rectangle:[27,123],parallelogram:[48,130],trapezium:[54,100]}[id];
      var bottomRight=id==='parallelogram'?109:123;
      var outline=[[27,91],[topEdge[0],29],[topEdge[1],29],[bottomRight,91],[27,91]];
      ctx.beginPath();outline.forEach(function(point,index){if(index)ctx.lineTo(...point);else ctx.moveTo(...point);});ctx.fillStyle='#dcecff';ctx.fill();
      line(outline,blue,2);
      line([[76,29],[76,91]],green,1.5);
      text('h',85,61,11,green);
    }else if(id==='geometry'){
      var ring=ctx.createLinearGradient(33,12,116,105);ring.addColorStop(0,'#d4edff');ring.addColorStop(1,'#eff6fe');
      ctx.beginPath();ctx.arc(72,57,39,0,2*Math.PI);ctx.fillStyle=ring;ctx.fill();ctx.strokeStyle=blue;ctx.lineWidth=2;ctx.stroke();
      line([[72,57],[105,38]],red);dot(72,57,red);text('r',91,56,13,red);text('S = πr²',74,109,13);
    }else if(id==='solid'){
      var a=[[37,47],[91,47],[91,101],[37,101],[37,47]],b=[[61,25],[115,25],[115,79],[91,101]];
      rect(37,47,54,54,'#e3f0ff');line(a);line(b);line([[37,47],[61,25]]);line([[91,47],[115,25]]);text('V = a³',75,12,13);
    }else if(id==='pythag'||id==='heron'){
      var triangle=id==='pythag'?[[33,24],[33,91],[121,91],[33,24]]:[[28,91],[68,22],[124,91],[28,91]];
      ctx.beginPath();triangle.forEach(function(p,i){if(i)ctx.lineTo(...p);else ctx.moveTo(...p);});ctx.fillStyle='#e2efff';ctx.fill();
      line(triangle);
      if(id==='pythag'){line([[33,80],[44,80],[44,91]],green);text('3',23,58,13);text('4',81,104,13);text('5',85,48,13,red);}
      else{text('a',76,104,13);text('b',107,52,13);text('c',39,52,13);}
    }else if(['coordinate','graph','derivative','linear','quadratic','system'].includes(id)){
      axes();
      if(['graph','derivative','quadratic'].includes(id)){
        var points=Array.from({length:34},function(_,i){var x=24+i*3;return [x,89-(x-75)**2/36];});
        line(points,blue,2.4);
        if(id==='derivative'){line([[66,106],[123,30]],red);dot(100,72,red);}
        else{dot(52.5,75,red);dot(97.5,75,red);}
      }else{
        line([[25,96],[126,26]],blue,2.4);
        if(id==='system'){line([[24,32],[124,89]],red);dot(78,60,green);}
        if(id==='coordinate'){dot(49,79,red);dot(109,37,red);text('A',46,94,12);text('B',110,23,12);}
      }
    }else if(['statistics','frequency','combination'].includes(id)){
      if(id==='combination'){
        ['A','B','C','D'].forEach(function(label,i){var x=35+i*26;dot(x,38,i%2?green:blue);text(label,x,55,12);});
        line([[35,69],[35,79],[61,79],[61,69]],red);text('C(4, 2) = 6',75,103,15);
      }else{
        line([[19,18],[19,97],[137,97]],'#899ab7',1);
        [27,49,67,39].forEach(function(height,i){rect(27+27*i,97-height,17,height,['#78b5f4','#528fe3','#326cd6','#5bb8ac'][i]);text(String(i+1),35+27*i,107,10);});
      }
    }else if(id==='time'||id==='trig'){
      ctx.beginPath();ctx.arc(75,61,42,0,Math.PI*2);ctx.strokeStyle='#9eb7d6';ctx.lineWidth=2;ctx.stroke();
      if(id==='time'){
        text('12',75,29,11);text('3',107,61,11);text('6',75,94,11);text('9',42,61,11);
        line([[75,61],[75,37]],red,3);line([[75,61],[96,61]],blue,3);
      }else{
        line([[27,61],[123,61]],'#a1b4cd',1);line([[75,105],[75,14]],'#a1b4cd',1);
        line([[75,61],[107,35]],blue);line([[107,35],[107,61],[75,61]],green);text('α',90,54,11,red);
      }
      dot(75,61,red);
    }else{
      var example={expression:['√(3² + 4²)','= 5'],fraction:['¾ + ⅛','= ⅞'],percent:['25% × 80','= 20'],number:['84 và 30','ƯCLN = 6'],unit:['100 cm','= 1 m'],logarithm:['log₂(8)','= 3']}[id];
      if(example){text(example[0],75,39,17);line([[38,61],[112,61]],'#d5e3f8',1);text(example[1],75,82,17,blue);}
    }
  });
}

var originalSuites = [
  {label:'Hình học và đo lường',geometry:true,icon:'△',preview:'heron',caption:'Dựng hình, đồng dạng, hình học 3D',port:47861,base:'hinh-hoc-va-do-luong',groups:[
    ['Hình học phẳng','Dựng và khảo sát hình','heron',[
      ['Tam giác đều','hinh-hoc-mat-phang/tam-giac-deu'],['Tam giác vuông','hinh-hoc-mat-phang/tam-giac-vuong'],
      ['Hình chữ nhật','hinh-hoc-mat-phang/hinh-chu-nhat'],['Hình thoi','hinh-hoc-mat-phang/hinh-thoi'],
      ['Hình bình hành','hinh-hoc-mat-phang/hinh-binh-hanh'],['Hình thang cân','hinh-hoc-mat-phang/hinh-thang-can'],
      ['Hình đối xứng','hinh-hoc-mat-phang/hinh-doi-xung'],['Đa giác','da-giac']
    ]],
    ['Hình học phẳng','Quan hệ hình học','circle-chord',[
      ['Các đường đặc biệt trong tam giác','cac-duong-dac-biet-trong-tam-giac'],['Các hình đồng dạng','cac-hinh-dong-dang']
    ]],
    ['Hình học không gian','Khảo sát hình khối','solid',[['Hình học 3D','hinh-hoc-3d']]]
  ]},
  {label:'Xác suất và thống kê',icon:'▥',preview:'statistics',caption:'Biểu đồ, tần số, xác suất và thí nghiệm',port:47862,base:'thong-ke-va-xac-suat',groups:[
    ['Xác suất – Thống kê','Vẽ biểu đồ','statistics',[
      ['Biểu đồ tranh','bieu-do/bieu-do-tranh'],['Biểu đồ cột','bieu-do/bieu-do-cot'],['Biểu đồ cột kép','bieu-do/bieu-do-cotkep'],
      ['Biểu đồ đoạn thẳng','bieu-do/bieu-do-doan-thang'],['Biểu đồ quạt','bieu-do/bieu-do-quat']
    ]],
    ['Xác suất – Thống kê','Phân tích số liệu','frequency',[
      ['Bảng không ghép nhóm','thong-ke/bang-khong-ghep-nhom'],['Bảng ghép nhóm','thong-ke/bang-ghep-nhom']
    ]],
    ['Xác suất – Thống kê','Tính xác suất','combination',[
      ['Tính toán xác suất','xac-suat/tinh-toan-chung'],['Phân phối nhị thức','xac-suat/phan-phoi-nhi-thuc']
    ]],
    ['Xác suất – Thống kê','Thí nghiệm ngẫu nhiên','combination',[
      ['Tung đồng xu','minh-hoa-bai-toan/dong-xu'],['Gieo xúc xắc','minh-hoa-bai-toan/xuc-xac'],['Bắt bóng','minh-hoa-bai-toan/bat-bong']
    ]]
  ]},
  {label:'Đại số và giải tích',icon:'ƒ',preview:'derivative',caption:'Đồ thị, giao điểm và đạo hàm',port:47863,base:'dai-so-va-giai-tich',groups:[
    ['Đại số','Khảo sát đồ thị','graph',[
      ['Hàm số bậc hai','do-thi-ham-so/ham-so-bac-2'],['Hàm số lũy thừa','do-thi-ham-so/ham-so-luy-thua'],
      ['Hàm số logarit','do-thi-ham-so/ham-so-logarit'],['Sự tương giao của đồ thị','minh-hoa-do-thi/mo-ta-su-tuong-giao']
    ]],
    ['Lượng giác','Đồ thị lượng giác','trig',[['Hàm số lượng giác','do-thi-ham-so/ham-so-luong-giac']]],
    ['Giải tích','Mô hình giải tích','derivative',[
      ['Mô tả đạo hàm','mo-ta-dao-ham'],['Mô hình thao tác động','minh-hoa-do-thi/mo-hinh-thao-tac-dong']
    ]]
  ]}
];
var calculatorExamples = {
  expression: ['Tính biểu thức có ngoặc, lũy thừa và căn.', '2 × (3 + 4)² + √81 = 107.'],
  fraction: {
    '+':['Cộng 2/3 và 1/4.', 'Quy đồng mẫu 12, cộng 8/12 với 3/12 được 11/12.'],
    '-':['Trừ 1/4 khỏi 2/3.', 'Quy đồng mẫu 12, lấy 8/12 − 3/12 = 5/12.'],
    '*':['Nhân 2/3 với 1/4.', 'Nhân tử với tử, mẫu với mẫu. Kết quả 1/6.'],
    '/':['Chia 2/3 cho 1/4.', 'Nhân 2/3 với phân số đảo 4/1. Kết quả 8/3.']
  },
  percent:{
    of:['Tính 20% của 250.', '250 × 20/100 = 50.'],
    ratio:['50 bằng bao nhiêu phần trăm của 250?', '50/250 × 100% = 20%.',{a:50}],
    change:['Giá từ 80 lên 100.', '(100 − 80)/80 × 100% = 25%.',{a:80,b:100}]
  },
  linear:['Giải 3x − 12 = 0. Điền hệ số a = 3 và b = −12.', 'x = 12/3 = 4.'],
  quadratic:['Giải x² − 5x + 6 = 0. Điền a = 1, b = −5, c = 6.', 'Δ = 1. Hai nghiệm là 2 và 3.'],
  system:['Giải hệ 2x + y = 5 và x − y = 1.', 'Cộng hai phương trình được 3x = 6. Vậy x = 2, y = 1.'],
  geometry:{
    rectangle:['Hình chữ nhật dài 6, rộng 4.', 'P = 2 × (6 + 4) = 20. S = 6 × 4 = 24.'],
    square:['Hình vuông cạnh 6.', 'P = 4 × 6 = 24. S = 6² = 36.'],
    triangle:['Tam giác đáy 6, đường cao ứng với đáy 3.', 'S = 6 × 3/2 = 9.'],
    parallelogram:['Hình bình hành đáy 6, chiều cao 3.', 'S = 6 × 3 = 18.'],
    trapezoid:['Hình thang có hai đáy 6 và 4, chiều cao 3.', 'S = (6 + 4) × 3/2 = 15.'],
    rhombus:['Hình thoi cạnh 6, chiều cao 3.', 'P = 4 × 6 = 24. S = 6 × 3 = 18.'],
    circle:['Hình tròn bán kính 5.', 'C = 10π ≈ 31,42. S = 25π ≈ 78,54.']
  },
  solid:{
    cube:['Hình lập phương cạnh 4.', 'V = 4³ = 64. S toàn phần = 6 × 4² = 96.'],
    box:['Hình hộp chữ nhật kích thước 4 × 3 × 6.', 'V = 72. S toàn phần = 2 × (12 + 18 + 24) = 108.'],
    cylinder:['Hình trụ bán kính 3, cao 6.', 'V = 54π. S toàn phần = 54π.'],
    cone:['Hình nón bán kính 3, cao 6.', 'V = 18π. Đường sinh = √45, S toàn phần = 3π × (3 + √45).'],
    sphere:['Hình cầu bán kính 3.', 'V = 36π. S mặt cầu = 36π.'],
    pyramid:['Hình chóp có đáy chữ nhật 4 × 3, chiều cao 6.', 'V = 4 × 3 × 6/3 = 24.']
  },
  pythag:{
    ab:['Hai cạnh góc vuông dài 3 và 4.', 'Cạnh huyền = √(9 + 16) = 5.'],
    ac:['Một cạnh góc vuông dài 3, cạnh huyền dài 5.', 'Cạnh góc vuông còn lại = √(25 − 9) = 4.',{b:5}]
  },
  coordinate:['Hai điểm A(1; 2) và B(5; 10).', 'AB = √80. M(3; 6). Hệ số góc bằng 2 và đường thẳng là y = 2x.'],
  statistics:['Nhập dãy 2; 4; 4; 4; 5; 5; 7; 9.', 'Tổng là 40, có 8 giá trị. Trung bình = 5, trung vị = 4,5, phương sai tổng thể = 4.'],
  combination:['Tung xu cân đối 6 lần độc lập, xét đúng 2 lần ngửa.', '6! = 720, A(6,2) = 30, C(6,2) = 15 và P(X = 2) = 15/64.'],
  trig:['Góc 30°.', 'sin = 1/2, cos = √3/2, tan = 1/√3. Đổi sang radian được π/6.'],
  logarithm:['Cơ số a = 2 và x = 8.', 'log₂8 = 3 vì 2³ = 8.'],
  graph:{
    quadratic:['Vẽ y = x² − 2x − 3.', 'Đỉnh I(1; −4), cắt trục Ox tại x = −1 và x = 3.'],
    linear:['Vẽ y = 2x + 1.', 'Đường thẳng đi qua (0; 1) và (1; 3).',{a:2,b:1}]
  },
  number:['Tìm ƯCLN và BCNN của 84 và 30.', 'ƯCLN = 6. BCNN = 84 × 30/6 = 420.'],
  unit:{
    length:['Đổi 100 cm sang m.', '100 × 0,01 = 1 m.',{from:'cm',to:'m'}],
    area:['Đổi 100 cm² sang m².', '100 × 0,0001 = 0,01 m².',{from:'cm²',to:'m²'}],
    volume:['Đổi 100 mL sang L.', '100 × 0,001 = 0,1 L.',{from:'mL',to:'L'}],
    mass:['Đổi 100 g sang kg.', '100 × 0,001 = 0,1 kg.',{from:'g',to:'kg'}],
    time:['Đổi 120 phút sang giờ.', '120/60 = 2 giờ.',{value:120,from:'phút',to:'giờ'}],
    angle:['Đổi 180° sang radian.', '180 × π/180 = π rad.',{value:180,from:'độ',to:'radian'}]
  },
  time:['Tính khoảng thời gian từ 08:15 đến 11:45.', '11:45 − 08:15 = 3 giờ 30 phút.'],
  heron:['Tam giác có ba cạnh 3, 4, 5.', 'Nửa chu vi p = 6. S = √(6 × 3 × 2 × 1) = 6.'],
  frequency:['Nhập ba dòng: 2; 1, 4; 3 và 6; 2. Mỗi dòng nhập một cặp giá trị và tần số.', 'Tổng tần số = 6, tổng có trọng số = 26, trung bình = 13/3.'],
  derivative:['Với f(x) = 2x³ + 1, tính đạo hàm tại x₀ = 2.', 'f′(x) = 6x² nên f′(2) = 24.']
};
var originalExamples = {
  'hinh-hoc-mat-phang/tam-giac-deu':['Kéo một đỉnh rồi đọc số đo ba góc.', 'Trong tam giác đều, mỗi góc bằng 60° và ba cạnh bằng nhau.'],
  'hinh-hoc-mat-phang/tam-giac-vuong':['Thay đổi một đỉnh và quan sát góc vuông.', 'Góc vuông giữ 90°. Hai góc nhọn có tổng 90°.'],
  'hinh-hoc-mat-phang/hinh-chu-nhat':['Thay đổi chiều dài hoặc chiều rộng, quan sát góc và hai đường chéo.', 'Bốn góc bằng 90°. Hai đường chéo bằng nhau.'],
  'hinh-hoc-mat-phang/hinh-thoi':['Đổi độ mở của hình và quan sát hai đường chéo.', 'Hai đường chéo vuông góc và cắt nhau tại trung điểm của mỗi đường.'],
  'hinh-hoc-mat-phang/hinh-binh-hanh':['Kéo đỉnh và so sánh từng cặp cạnh đối.', 'Hai cặp cạnh đối vẫn song song và bằng nhau.'],
  'hinh-hoc-mat-phang/hinh-thang-can':['Thay đổi độ dài đáy và so sánh hai góc kề cùng một đáy.', 'Hai góc kề một đáy bằng nhau.'],
  'hinh-hoc-mat-phang/hinh-doi-xung':['Chọn cặp điểm tương ứng qua trục đối xứng.', 'Trục đối xứng vuông góc và đi qua trung điểm đoạn nối hai điểm khác nhau.'],
  'da-giac':['Chọn một ngũ giác và đếm số cạnh.', 'Với ngũ giác đơn, tổng góc trong là (5 − 2) × 180° = 540°.'],
  'cac-duong-dac-biet-trong-tam-giac':['Quan sát ba đường trung tuyến nếu đang bật trung tuyến.', 'Ba đường đồng quy tại trọng tâm. Từ đỉnh đến trọng tâm dài 2/3 trung tuyến.'],
  'cac-hinh-dong-dang':['Chọn hai hình đồng dạng rồi so sánh các cạnh tương ứng.', 'Nếu một cặp cạnh là 3 và 6, tỉ số từ hình nhỏ đến hình lớn là 2. Các góc tương ứng bằng nhau.'],
  'hinh-hoc-3d':['Quan sát hình lập phương từ các hướng khác nhau.', 'Đếm được 6 mặt, 12 cạnh và 8 đỉnh.'],
  'bieu-do/bieu-do-tranh':['Đặt tiêu đề “Số quyển sách”. Thêm An = 2 và Bình = 4.', 'Bình có số sách gấp đôi An. Nếu mỗi biểu tượng ứng với 1 quyển thì hai hàng có 2 và 4 biểu tượng.'],
  'bieu-do/bieu-do-cot':['Điền ba giá trị cột 3, 5 và 2. Đặt tên tương ứng An, Bình và Chi.', 'Cột Bình cao nhất, ứng với 5. Tổng ba giá trị là 10.'],
  'bieu-do/bieu-do-cotkep':['Nhập hai nhóm có cặp số (3; 5) và (4; 4).', 'Nhóm thứ nhất có chênh lệch 2, nhóm thứ hai có hai cột bằng nhau.'],
  'bieu-do/bieu-do-doan-thang':['Nhập các điểm theo thứ tự ngày với giá trị 2, 5, 4.', 'Đoạn đầu tăng 3 đơn vị, đoạn sau giảm 1 đơn vị.'],
  'bieu-do/bieu-do-quat':['Nhập ba nhóm có số lượng 2, 3 và 5.', 'Tổng 10. Ba phần lần lượt chiếm 20%, 30% và 50%.'],
  'thong-ke/bang-khong-ghep-nhom':['Nhập giá trị 2, 4, 6 với tần số 1, 3, 2.', 'Tổng tần số bằng 6. Trung bình có trọng số là 26/6 = 13/3.'],
  'thong-ke/bang-ghep-nhom':['Nhập hai khoảng [0; 10) và [10; 20) với tần số 2 và 2.', 'Dùng giá trị đại diện 5 và 15. Trung bình ước tính là 10, phương sai tổng thể ước tính là 25.'],
  'xac-suat/tinh-toan-chung':['Thử với N = 6 và K = 2 trong phần tính tổ hợp hoặc chỉnh hợp.', 'C(6,2) = 15, A(6,2) = 30. Hai cách đếm khác nhau ở việc xét thứ tự.'],
  'xac-suat/phan-phoi-nhi-thuc':['Đặt n = 6, p = 0,5, xét X = 2.', 'Xác suất đúng hai lần thành công là 15/64 ≈ 0,234375.'],
  'minh-hoa-bai-toan/dong-xu':['Giữ một đồng xu, nhập 20 lần và bấm Tung Đồng Xu.', 'Tổng số lần ngửa và sấp là 20. Số lần ngửa có thể khác 10 trong một lượt.'],
  'minh-hoa-bai-toan/xuc-xac':['Giữ một xúc xắc rồi bấm Lắc vài lần.', 'Mỗi lần cho một mặt từ 1 đến 6. Với xúc xắc cân đối, xác suất mặt chẵn là 1/2.'],
  'minh-hoa-bai-toan/bat-bong':['Giữ hộp mẫu có 1 đỏ, 1 xanh và 1 vàng rồi bấm Lấy bóng.', 'Trước lần rút đầu, mỗi màu có xác suất 1/3 nếu các bóng đồng khả năng.'],
  'do-thi-ham-so/ham-so-bac-2':['Thử y = x² − 2x − 3 bằng cách đặt các hệ số a = 1, b = −2, c = −3.', 'Đỉnh (1; −4), giao điểm với trục Ox là (−1; 0) và (3; 0).'],
  'do-thi-ham-so/ham-so-luong-giac':['Quan sát y = sin x. So sánh x = 0, π/2 và π.', 'Các giá trị lần lượt là 0, 1, 0. Chu kỳ là 2π.'],
  'do-thi-ham-so/ham-so-luy-thua':['Quan sát y = x² và đọc các điểm x = −2, 0, 2.', 'Các giá trị lần lượt là 4, 0, 4. Đồ thị đối xứng qua trục Oy.'],
  'do-thi-ham-so/ham-so-logarit':['Thử cơ số 2 và quan sát x = 1, 2, 4.', 'Các giá trị logarit là 0, 1, 2. Miền xác định x > 0.'],
  'minh-hoa-do-thi/mo-ta-su-tuong-giao':['Tìm điểm hai đồ thị cắt nhau. Ví dụ y = x² và y = x.', 'Giải x² = x được x = 0 hoặc 1. Hai giao điểm (0; 0) và (1; 1).'],
  'mo-ta-dao-ham':['Quan sát hệ số góc tiếp tuyến. Ví dụ với y = x² tại x = 2.', 'y′ = 2x nên hệ số góc bằng 4 và tiếp tuyến đi qua (2; 4).'],
  'minh-hoa-do-thi/mo-hinh-thao-tac-dong':['Cho điểm chạy dọc đồ thị tiến gần một vị trí từ hai phía. Ví dụ y = x² khi x tiến đến 2.', 'Giá trị y tiến về 4 từ cả hai phía.']
};
var originalTools=originalSuites.flatMap(suite=>suite.groups.flatMap(([topic,group,preview,entries])=>
  entries.map(([name,id])=>({id,name,topic,group,preview,suite}))));
function exampleCard(sample,heading='Ví dụ có lời giải',activity=false){
  return '<section class="worked-example"><h3>'+esc(heading)+'</h3><p><strong>'+(activity?'Thao tác':'Dữ kiện')+'</strong> '+esc(sample[0])+'</p>'+
    '<p><strong>'+(activity?'Đối chiếu':'Cách làm')+'</strong> '+esc(sample[1])+'</p></section>';
}
document.getElementById('pinned-suites-nav').innerHTML=originalSuites.map(suite=>
  '<button type="button" data-original-suite="'+suite.base+'"><span aria-hidden="true">'+suite.icon+'</span>'+esc(suite.label)+'</button>').join('');
function suiteInMode(suite){return inMode(Boolean(suite.geometry));}
function pinnedSuites(){
  return '<section class="pinned-suites" aria-labelledby="pinned-suites-title"><h2 id="pinned-suites-title">Bộ công cụ gốc</h2>'+
    '<div class="pinned-suites-grid">'+originalSuites.filter(suiteInMode).map(suite=>
      '<button class="topic-card suite-feature topic-tone-'+originalSuites.indexOf(suite)+'" type="button" data-original-suite="'+suite.base+'">'+
      '<span class="topic-card-copy"><strong>'+esc(suite.label)+'</strong><small>'+esc(suite.caption)+'</small></span>'+
      '<canvas width="300" height="240" data-preview="'+suite.preview+'" aria-hidden="true"></canvas><span class="topic-arrow" aria-hidden="true">→</span></button>').join('')+
    '</div></section>';
}
function originalSuitePage(){
  var suite=originalSuites.find(item=>item.base===state.suite);
  app.innerHTML='<div class="page-title"><h1>'+esc(suite.label)+'</h1></div>'+
    originalToolGroups(originalTools.filter(tool=>tool.suite===suite),true);
  drawCardPreviews();
}
function originalToolGroups(items,suitePage=false){
  if(!items.length)return '';
  var groups=new Map();
  items.forEach(item=>{
    if(!groups.has(item.group))groups.set(item.group,[]);
    groups.get(item.group).push(item);
  });
  return '<section class="topic-content original-tools">'+(suitePage?'':'<h3>'+esc(items[0].suite.label)+' <span>· Bộ công cụ gốc</span></h3>')+'<div class="original-groups">'+
    Array.from(groups,([name,entries])=>'<div class="original-group"><div class="original-group-head"><h4>'+esc(name)+'</h4><canvas width="300" height="240" data-preview="'+entries[0].preview+'" aria-hidden="true"></canvas></div>'+
      '<ul>'+entries.map(tool=>'<li><button type="button" data-original-tool="'+esc(tool.id)+'">'+esc(tool.name)+'<span aria-hidden="true">→</span></button></li>').join('')+'</ul></div>').join('')+'</div></section>';
}
function originalPage(){
  var tool=originalTools.find(item=>item.id===state.suite);
  var suite=tool.suite;
  var origin='http://127.0.0.1:'+suite.port;
  var url=origin+'/dashboard/'+suite.base+'/'+tool.id;
  var related=originalTools.filter(item=>item.topic===tool.topic);
  app.innerHTML='<div class="original-heading"><div class="page-title"><h1>'+esc(tool.name)+'</h1></div>'+
    '<div class="filter-bar"><button class="btn outline" type="button" data-topic="'+esc(tool.topic)+'">← '+esc(tool.topic)+'</button>'+
    filterSelect('original-tool-select','Trong bộ công cụ',related.map(item=>[item.id,item.name]),tool.id)+'</div></div>'+
    exampleCard(originalExamples[tool.id],'Thử với ví dụ này',true)+
    '<div id="original-content" aria-busy="true"><p role="status">Đang kết nối…</p></div>';
  var content=document.getElementById('original-content');
  fetch(origin+'/__gdvn_ready',{cache:'no-store',signal:AbortSignal.timeout(3000)})
    .then(async function(response){
      if(!response.ok||await response.text()!=='GDVN:'+suite.port)throw Error('Bộ công cụ chưa sẵn sàng');
      if(!content.isConnected)return;
      content.innerHTML='<iframe class="original-frame" title="'+esc(tool.name)+'" src="'+esc(url)+'" allowfullscreen></iframe>';
    })
    .catch(function(){
      if(!content.isConnected)return;
      content.innerHTML='<div class="empty" role="status"><strong>Chưa kết nối được với '+esc(suite.label)+'.</strong>'+
        '<p>Chạy <code>Mo-bo-cong-cu-goc.cmd</code> trong thư mục <code>source</code>, rồi bấm Thử lại.</p>'+
        '<button class="btn outline" type="button" id="retry-original">Thử lại</button></div>';
      content.querySelector('#retry-original').addEventListener('click',originalPage);
    })
    .finally(function(){content.removeAttribute('aria-busy');});
}

function home(){
  var geometry=state.mode==='geometry';
  var topic=modeTopics().find(item=>item.title===state.cat);
  if(topic){
    app.innerHTML='<div class="topic-detail-heading"><button class="btn outline" data-topic="all">← Tất cả chủ đề</button></div>'+
      topicSections(tools.filter(tool=>topic.tools.includes(tool.id)),listFormulas(false),topic,originalTools.filter(tool=>tool.topic===topic.title));
    drawCardPreviews();
    return;
  }
  app.innerHTML=pinnedSuites()+'<section class="catalog-heading catalog-feature"><div><h1>'+modeLabel()+'</h1>'+
    '<div class="feature-actions"><button class="btn feature-button" data-view="board">'+(geometry?'Bảng dựng hình':'Bàn tính công thức')+'</button>'+
    (geometry?'<button class="btn feature-secondary" data-view="geometry-lab">Thao tác hình học</button><button class="btn feature-secondary" data-view="geometry-models">Mô hình hình học</button>':'')+
    '</div></div><canvas class="feature-preview" width="300" height="240" data-preview="'+(geometry?'angle-lab':'graph')+'" aria-hidden="true"></canvas></section>'+
    '<section aria-labelledby="topic-catalog-title"><h2 id="topic-catalog-title">Chủ đề</h2><div class="topic-grid">'+
    modeTopics().map((item,i)=>'<button type="button" class="topic-card topic-tone-'+(i%4)+'" data-topic="'+esc(item.title)+'">'+
      '<span class="topic-card-copy"><strong>'+esc(item.title)+'</strong><small>'+esc(item.summary)+'</small></span>'+
      '<canvas width="300" height="240" data-preview="'+item.preview+'" aria-hidden="true"></canvas><span class="topic-arrow" aria-hidden="true">→</span></button>').join('')+
    '</div></section>';
  drawCardPreviews();
}
function normalizeSearch(value) {
  return value.toLowerCase().normalize('NFD').replace(/\p{M}/gu, '').replace(/đ/g, 'd').trim();
}
function matchingTools(){
  var query=normalizeSearch(state.query);
  return tools.filter(function(tool){return toolInMode(tool)&&normalizeSearch(tool.title+' '+tool.desc).includes(query);});
}

function searchPage(){
  var query=normalizeSearch(state.query);
  var originals=originalTools.filter(tool=>normalizeSearch(tool.name+' '+tool.topic+' '+tool.group+' '+tool.suite.label).includes(query));
  var sections=topicSections(matchingTools(),listFormulas(false),null,originals);
  app.innerHTML='<div class="page-title"><h1>Kết quả tìm kiếm</h1></div>'+
    (sections||'<div class="empty"><strong>Không tìm thấy kết quả</strong><button class="btn outline" data-reset="1">Xóa tìm kiếm</button></div>');
  drawCardPreviews();
}
function listFormulas(fav){
  var query=normalizeSearch(state.query);
  var visible=modeTopics().map(topic=>topic.title);
  return formulas.filter(f=>visible.includes(f.group)&&(!fav||state.favs.includes(f.id))&&
    (state.cat==='all'||f.group===state.cat)&&normalizeSearch(f.title+' '+f.group+' '+f.expr+' '+f.note).includes(query));
}
var formulaTools=[
  ['fraction','op','+',['Cộng phân số']],['fraction','op','-',['Trừ phân số']],
  ['fraction','op','*',['Nhân phân số']],['fraction','op','/',['Chia phân số']],
  ['percent','mode','of',['Tính phần trăm']],
  ['percent','mode','change',['Tỉ lệ tăng giảm']],['number',null,null,['Ước chung lớn nhất và bội chung nhỏ nhất']],
  ['linear',null,null,['Phương trình bậc nhất']],['quadratic',null,null,['Biệt thức bậc hai','Nghiệm phương trình bậc hai']],
  ['graph','mode','quadratic',['Đỉnh parabol']],['graph','mode','linear',['Đường thẳng']],
  ['geometry','shape','square',['Chu vi hình vuông','Diện tích hình vuông']],
  ['geometry','shape','rectangle',['Chu vi chữ nhật','Diện tích chữ nhật']],
  ['geometry','shape','triangle',['Diện tích tam giác']],['geometry','shape','parallelogram',['Diện tích bình hành']],
  ['geometry','shape','trapezoid',['Diện tích hình thang']],
  ['geometry','shape','circle',['Chu vi đường tròn','Diện tích hình tròn']],['pythag','mode','ab',['Pythagoras']],
  ['heron',null,null,['Heron']],
  ['solid','shape','cube',['Thể tích lập phương','Diện tích lập phương']],['solid','shape','box',['Thể tích hình hộp','Diện tích hình hộp']],
  ['solid','shape','cylinder',['Thể tích hình trụ','Diện tích toàn phần trụ']],
  ['solid','shape','cone',['Thể tích hình nón']],
  ['solid','shape','sphere',['Thể tích hình cầu','Diện tích mặt cầu']],
  ['coordinate',null,null,['Khoảng cách hai điểm','Trung điểm','Hệ số góc','Đường thẳng qua điểm']],
  ['trig',null,null,['Đổi góc sang radian']],['logarithm',null,null,['Đổi cơ số logarit']],
  ['statistics',null,null,['Trung bình cộng','Phương sai tổng thể','Độ lệch chuẩn']],
  ['frequency',null,null,['Trung bình có tần số']],['derivative',null,null,['Đạo hàm hằng số','Đạo hàm lũy thừa']],
  ['combination',null,null,['Giai thừa','Chỉnh hợp','Tổ hợp','Phân phối nhị thức']]
];
function formulaCard(f){
  var saved=state.favs.includes(f.id);
  return '<details class="formula" data-formula="'+f.id+'"><summary><strong>'+esc(f.title)+'</strong><span class="formula-preview" aria-hidden="true">'+esc(f.expr)+'</span></summary>'+
    '<div class="formula-body"><div class="expr">'+esc(f.expr)+'</div><p class="note">'+esc(f.note)+'</p>'+
    exampleCard(formulaExamples[f.title])+'<div class="inline-calculator"></div>'+
    '<div class="f-actions"><button data-copy="'+f.id+'">⧉ Sao chép</button><button class="heart'+(saved?' on':'')+'" data-fav="'+f.id+'" aria-pressed="'+saved+'">'+(saved?'♥ Bỏ lưu':'♡ Lưu')+'</button></div></div></details>';
}
function filterSelect(name,label,entries,selected){
  return '<div class="filter-select"><label for="'+name+'">'+label+'</label><select id="'+name+'">'+entries.map(function(entry){
    return '<option value="'+esc(entry[0])+'"'+(entry[0]===selected?' selected':'')+'>'+esc(entry[1])+'</option>';
  }).join('')+'</select></div>';
}

function formulaPage(fav){
  var items=listFormulas(fav);
  app.innerHTML='<div class="page-title"><h1>'+(fav?'Công thức đã lưu':'Thư viện công thức')+'</h1></div>'+
    '<div class="filter-bar">'+filterSelect('formula-category','Chủ đề',[['all','Tất cả chủ đề']].concat(
      modeTopics().filter(topic=>formulas.some(f=>f.group===topic.title)).map(topic=>[topic.title,topic.title])),state.cat)+'</div>'+
    (items.length?topicSections([],items):'<div class="empty"><strong>Không có công thức phù hợp</strong><button class="btn outline" data-reset="1">Xóa bộ lọc</button></div>');
}
function field(k,label,v,type){type=type||'number';return '<div class="field '+(type==='textarea'||type==='text'?'wide':'')+'"><label for="f-'+k+'">'+esc(label)+'</label>'+(type==='textarea'?'<textarea id="f-'+k+'" data-key="'+k+'">'+esc(v)+'</textarea>':'<input id="f-'+k+'" data-key="'+k+'" type="'+(type==='text'?'text':'number')+'" step="any" value="'+esc(v)+'">')+'</div>';}
function choice(k,label,options){return '<div class="field"><label for="f-'+k+'">'+esc(label)+'</label><select id="f-'+k+'" data-key="'+k+'">'+options.map(function(o){return '<option value="'+esc(o[0])+'">'+esc(o[1])+'</option>';}).join('')+'</select></div>';}
function form(id,inline){
var fields='',help='';
if(id==='expression'){
  help='Nhập từ bàn phím hoặc dùng phím bên dưới. Dùng dấu chấm cho phần thập phân, dấu * cho phép nhân.';
  fields=field('expr','Biểu thức','2*(3+4)^2 + sqrt(81)','text')+
    '<label class="angle-toggle"><input id="calc-degrees" type="checkbox" checked> Góc theo độ (bỏ chọn để dùng radian)</label>'+
    '<div class="keypad wide" aria-label="Bàn phím máy tính">'+
    ['sin(','cos(','tan(','log(','ln(','sqrt(','(',')','^','!','7','8','9','/','AC','4','5','6','*','⌫','1','2','3','-','pi','0','.','%','+','=','Ans','M+','M−','MR','MC'].map(function(key){
      var label={AC:'Xóa hết','⌫':'Xóa ký tự','=':'Tính biểu thức'}[key]||key;
      return '<button type="button" data-calc-key="'+esc(key)+'" aria-label="'+esc(label)+'">'+esc(key)+'</button>';
    }).join('')+'</div><p class="calc-note wide" id="memory-display" aria-live="polite"></p>';
}
if(id==='fraction'){help='Tử số và mẫu số phải là số nguyên; mẫu số khác 0.';fields=field('a','Tử số a',2)+field('b','Mẫu số b',3)+choice('op','Phép tính',[['+','Cộng'],['-','Trừ'],['*','Nhân'],['/','Chia']])+field('c','Tử số c',1)+field('d','Mẫu số d',4);}
if(id==='percent'){fields=choice('mode','Loại phép tính',[['of','p% của x'],['ratio','a là bao nhiêu % của b'],['change','Tăng/giảm từ a sang b']])+field('a','Giá trị a hoặc p',20)+field('b','Giá trị b hoặc x',250);}
if(id==='linear'){help='Giải ax+b=0.';fields=field('a','Hệ số a',3)+field('b','Hệ số b',-12);}
if(id==='quadratic'){help='Giải ax²+bx+c=0 trong tập số thực.';fields=field('a','Hệ số a',1)+field('b','Hệ số b',-5)+field('c','Hệ số c',6);}
if(id==='system'){help='Hệ a₁x+b₁y=c₁, a₂x+b₂y=c₂.';fields=field('a1','Hệ số a₁',2)+field('b1','Hệ số b₁',1)+field('c1','Hằng số c₁',5)+field('a2','Hệ số a₂',1)+field('b2','Hệ số b₂',-1)+field('c2','Hằng số c₂',1);}
if(id==='geometry'){help='Dùng cùng một đơn vị độ dài.';fields=choice('shape','Hình cần tính',[['rectangle','Hình chữ nhật'],['square','Hình vuông'],['triangle','Tam giác'],['parallelogram','Hình bình hành'],['trapezoid','Hình thang'],['rhombus','Hình thoi'],['circle','Hình tròn']])+field('a','Cạnh a / đáy a',6)+field('b','Cạnh b / đáy b',4)+field('h','Chiều cao h',3)+field('r','Bán kính r',5);}
if(id==='solid'){help='Khối hình nón là nón tròn xoay; khối chóp có đáy chữ nhật và chiều cao vuông góc đáy.';fields=choice('shape','Loại khối',[['cube','Lập phương'],['box','Hộp chữ nhật'],['cylinder','Hình trụ'],['cone','Hình nón'],['sphere','Hình cầu'],['pyramid','Chóp đáy chữ nhật']])+field('a','Cạnh a',4)+field('b','Cạnh b',3)+field('h','Chiều cao h',6)+field('r','Bán kính r',3);}
if(id==='pythag'){fields=choice('mode','Biết hai cạnh',[['ab','Hai cạnh góc vuông a, b'],['ac','Cạnh góc vuông a và cạnh huyền c']])+field('a','Độ dài a',3)+field('b','Độ dài b hoặc c',4);}
if(id==='coordinate'){fields=field('x1','x₁',1)+field('y1','y₁',2)+field('x2','x₂',5)+field('y2','y₂',10);}
if(id==='statistics'){help='Dùng dấu chấm cho phần thập phân. Ngăn cách số bằng dấu chấm phẩy hoặc khoảng trắng.';fields=field('series','Dãy dữ liệu','2; 4; 4; 4; 5; 5; 7; 9','textarea');}
if(id==='combination'){fields=field('n','Số phần tử n',6)+field('k','Số chọn k',2)+field('p','Xác suất p (0–1)',.5);}
if(id==='trig'){fields=field('angle','Góc tính bằng độ',30);}
if(id==='logarithm'){fields=field('a','Cơ số a',2)+field('x','Giá trị x',8);}
if(id==='graph'){help='Vẽ trên miền x từ −10 đến 10, tỉ lệ trục y điều chỉnh tự động.';fields=choice('mode','Kiểu hàm',[['quadratic','Bậc hai: y=ax²+bx+c'],['linear','Bậc nhất: y=ax+b']])+field('a','a',1)+field('b','b',-2)+field('c','c',-3);}
if(id==='number'){fields=field('n','Số nguyên dương n',84)+field('m','Số nguyên dương m',30);}
if(id==='unit'){fields=choice('group','Đại lượng',[['length','Độ dài'],['area','Diện tích'],['volume','Thể tích'],['mass','Khối lượng'],['time','Thời gian'],['angle','Góc']])+field('value','Giá trị',100)+'<div class="field"><label for="unit-from">Đơn vị nguồn</label><select id="unit-from" data-key="from"></select></div><div class="field"><label for="unit-to">Đơn vị đích</label><select id="unit-to" data-key="to"></select></div>';}
if(id==='time'){help='Nếu kết thúc sớm hơn bắt đầu thì tính sang ngày kế tiếp. Hai thời điểm giống nhau được tính là 0 phút.';fields=field('start','Bắt đầu (HH:mm)','08:15','text')+field('end','Kết thúc (HH:mm)','11:45','text');}
if(id==='heron'){help='Nhập ba cạnh của tam giác theo cùng một đơn vị.';fields=field('a','Cạnh a',3)+field('b','Cạnh b',4)+field('c','Cạnh c',5);}
if(id==='frequency'){help='Mỗi dòng gồm một giá trị và một tần số, cách nhau bằng dấu chấm phẩy. Dùng dấu chấm cho phần thập phân.';fields=field('table','Giá trị; tần số','2; 1\n4; 3\n6; 2','textarea');}
if(id==='derivative'){help='Tính cho f(x) = axⁿ + b với n là số nguyên không âm.';fields=field('a','Hệ số a',2)+field('n','Số mũ n',3)+field('b','Hằng số b',1)+field('x','Điểm x₀',2);}
return (help&&!(inline&&['geometry','linear','quadratic'].includes(id))?'<p class="calc-note">'+esc(help)+'</p>':'')+
  '<div class="fields">'+fields+'</div><div class="calc-actions"><button class="btn blue" type="submit">Tính</button><button class="btn outline" type="button" data-example>Nạp ví dụ</button></div>';
}
var units={length:{mm:.001,cm:.01,m:1,km:1000,inch:.0254,ft:.3048},area:{'mm²':.000001,'cm²':.0001,'m²':1,'km²':1e6,ha:1e4},volume:{mL:.001,L:1,'cm³':.001,'dm³':1,'m³':1000},mass:{mg:.001,g:1,kg:1000,'tấn':1e6},time:{'giây':1,'phút':60,'giờ':3600,'ngày':86400},angle:{'độ':1,'radian':180/Math.PI}};
function updateUnits(){var group=document.querySelector('[data-key="group"]').value;var names=Object.keys(units[group]);['unit-from','unit-to'].forEach(function(id,i){var el=document.getElementById(id);el.innerHTML=names.map(function(u){return '<option value="'+esc(u)+'">'+esc(u)+'</option>';}).join('');el.value=names[Math.min(i+1,names.length-1)];});}
var theoryByTool={
  expression:'Thứ tự tính: ngoặc → lũy thừa → nhân, chia → cộng, trừ.',
  system:'D = a₁b₂ − a₂b₁. Nếu D ≠ 0, hệ có nghiệm duy nhất.',
  logarithm:'logₐ(x) = ln(x) / ln(a), với a > 0, a ≠ 1 và x > 0.',
  unit:'Giá trị đích = giá trị nguồn × hệ số nguồn / hệ số đích.',
  time:'Thời lượng = giờ kết thúc − giờ bắt đầu. Nếu qua nửa đêm, cộng thêm 24 giờ.'
};
var shapeFields={
  geometry:{rectangle:['Chiều dài','Chiều rộng'],square:['Cạnh'],triangle:['Đáy',null,'Chiều cao'],parallelogram:['Đáy',null,'Chiều cao'],trapezoid:['Đáy lớn','Đáy nhỏ','Chiều cao'],rhombus:['Cạnh',null,'Chiều cao'],circle:[null,null,null,'Bán kính']},
  solid:{cube:['Cạnh'],box:['Chiều dài','Chiều rộng','Chiều cao'],cylinder:[null,null,'Chiều cao','Bán kính'],cone:[null,null,'Chiều cao','Bán kính'],sphere:[null,null,null,'Bán kính'],pyramid:['Chiều dài đáy','Chiều rộng đáy','Chiều cao']}
};
function updateToolContext(form,tool){
  var inputs=values();
  var theory=form.parentElement.querySelector('.tool-theory');
  if(theory){
    var entries=formulaTools.filter(function(entry){return entry[0]===tool.id&&(!entry[1]||inputs[entry[1]]===entry[2]);});
    var titles=entries.flatMap(function(entry){return entry[3];});
    var expressions=titles.slice(0,2).map(function(title){return formulas.find(function(f){return f.title===title;})?.expr;}).filter(Boolean);
    var custom=workspaceTheory[tool.id];
    var workspaceFormula=typeof custom==='string'?custom:custom?.[inputs.op||inputs.mode];
    theory.textContent=workspaceFormula||theoryByTool[tool.id]||expressions.join('   ·   ');
    theory.hidden=!theory.textContent;
  }
  if(tool.id==='percent'){
    var labels={of:['Tỉ lệ p (%)','Giá trị gốc x'],ratio:['Phần a','Toàn phần b'],change:['Giá trị ban đầu A','Giá trị mới B']}[inputs.mode];
    ['a','b'].forEach((key,index)=>{form.querySelector('label[for="f-'+key+'"]').textContent=labels[index];});
  }
  if(shapeFields[tool.id]){
    var labels=shapeFields[tool.id][inputs.shape];
    ['a','b','h','r'].forEach(function(key,index){
      var input=form.querySelector('#f-'+key);
      input.closest('.field').hidden=!labels[index];
      if(labels[index])form.querySelector('label[for="f-'+key+'"]').textContent=labels[index];
    });
  }
  if(tool.id==='graph')form.querySelector('#f-c').closest('.field').hidden=inputs.mode==='linear';
  if(tool.id==='pythag')form.querySelector('label[for="f-b"]').textContent=inputs.mode==='ac'?'Cạnh huyền c':'Cạnh góc vuông b';
}
function geometryStage(tool){
  if(!['coordinate','pythag'].includes(tool))return '';
  var labels=tool==='coordinate'?['Điểm A','Điểm B']:['Đỉnh trên','Đỉnh bên phải'];
  return '<div class="geometry-stage"><p>Kéo điểm trên hình hoặc dùng phím mũi tên.</p><div class="geometry-board">'+
    '<canvas width="640" height="384" aria-hidden="true"></canvas>'+
    labels.map(function(label,index){return '<button type="button" class="geometry-handle" data-handle="'+index+'" aria-label="'+label+'">'+(tool==='coordinate'?['A','B'][index]:['B','C'][index])+'</button>';}).join('')+
    '</div></div>';
}
function bindGeometryStage(host,form,tool){
  var board=host.querySelector('.geometry-board');
  if(!board)return null;
  var ctx=board.querySelector('canvas').getContext('2d');
  var handles=Array.from(board.querySelectorAll('.geometry-handle'));
  var active=null,scale,points;
  var xy=tool==='coordinate';
  var inputs=Object.fromEntries(Array.from(form.querySelectorAll('[data-key]')).map(function(input){return [input.dataset.key,input];}));
  function get(key){return inputs[key]?.valueAsNumber??NaN;}
  function line(vertices,color,width){
    ctx.beginPath();
    vertices.forEach(function(point,i){if(i)ctx.lineTo(point[0],point[1]);else ctx.moveTo(point[0],point[1]);});
    ctx.strokeStyle=color;ctx.lineWidth=width;ctx.stroke();
  }
  function label(value,x,y){
    ctx.fillStyle='#173653';ctx.font='16px system-ui';ctx.fillText(value,x,y);
  }
  function place(handle,point){
    handle.style.left=(point[0]/640*100)+'%';
    handle.style.top=(point[1]/384*100)+'%';
  }
  function refresh(){
    ctx.clearRect(0,0,640,384);
    var a=get('a'),b=get('b');
    var horizontal=xy?0:inputs.mode.value==='ac'?(b>a?Math.sqrt((b-a)*(b+a)):NaN):b;
    var measures=xy?[get('x1'),get('y1'),get('x2'),get('y2')]:[a,horizontal];
    var valid=measures.every(Number.isFinite)&&(xy||(a>0&&horizontal>0));
    handles.forEach(function(handle){handle.hidden=!valid;});
    if(!valid){label('Nhập số hợp lệ để xem hình.',20,36);return;}
    if(!active){
      scale=xy?Math.min(14,266/Math.max(1,Math.abs(measures[0]),Math.abs(measures[2])),158/Math.max(1,Math.abs(measures[1]),Math.abs(measures[3]))):
        Math.min(32,440/horizontal,248/a);
    }
    if(xy){
      var center=[320,192],step=Math.max(1,Math.ceil(17/scale));
      for(var x=320%(step*scale);x<640;x+=step*scale)line([[x,0],[x,384]],'#d8e5f6',1);
      for(var y=192%(step*scale);y<384;y+=step*scale)line([[0,y],[640,y]],'#d8e5f6',1);
      line([[0,192],[640,192]],'#7994af',1.5);
      line([[320,0],[320,384]],'#7994af',1.5);
      label('x',615,182);label('y',329,22);label('0',304,210);
      points=[[center[0]+measures[0]*scale,center[1]-measures[1]*scale],[center[0]+measures[2]*scale,center[1]-measures[3]*scale]];
      var corner=[points[1][0],points[0][1]];
      line([points[0],corner,points[1]],'#7196b8',2);
      line(points,'#1764cd',3);
    }else{
      var origin=[92,309];
      points=[[origin[0],origin[1]-a*scale],[origin[0]+horizontal*scale,origin[1]]];
      line([origin,points[0],points[1],origin],'#1764cd',3);
      var mark=Math.min(18,a*scale*.35,horizontal*scale*.35);
      line([[origin[0],origin[1]-mark],[origin[0]+mark,origin[1]-mark],[origin[0]+mark,origin[1]]],'#119178',2);
      label('a = '+fmt(a),12,(origin[1]+points[0][1])/2);
      label('b = '+fmt(horizontal),(origin[0]+points[1][0])/2,340);
      label('c = '+fmt(Math.hypot(a,horizontal)),(points[1][0]+points[0][0])/2+10,(points[0][1]+origin[1])/2-12);
    }
    handles.forEach(function(handle,i){place(handle,points[i]);});
  }
  function move(index,x,y,useKeys){
    if(xy){
      if(useKeys){x=points[index][0]+x*scale;y=points[index][1]+y*scale;}
      inputs['x'+(index+1)].value=Math.round((Math.max(17,Math.min(623,x))-320)/scale);
      inputs['y'+(index+1)].value=Math.round((192-Math.max(17,Math.min(367,y)))/scale);
    }else{
      var a=get('a'),second=get('b'),isHyp=inputs.mode.value==='ac';
      var b=isHyp?Math.sqrt((second-a)*(second+a)):second;
      if(index===0)a=Math.max(.5,Math.round((useKeys?a-y:(309-Math.max(18,Math.min(293,y)))/scale)*2)/2);
      else b=Math.max(.5,Math.round((useKeys?b+x:(Math.max(110,Math.min(622,x))-92)/scale)*2)/2);
      inputs.a.value=a;
      inputs.b.value=isHyp?Math.hypot(a,b):b;
    }
    refresh();
    calculate();
  }
  handles.forEach(function(handle,index){
    handle.addEventListener('pointerdown',function(event){
      if(active||event.button!==0)return;
      active={id:event.pointerId};handle.setPointerCapture(event.pointerId);
      handle.focus({preventScroll:true});
    });
    handle.addEventListener('pointermove',function(event){
      if(active?.id!==event.pointerId)return;
      var bounds=board.getBoundingClientRect();
      move(index,(event.clientX-bounds.left)*640/bounds.width,(event.clientY-bounds.top)*384/bounds.height,false);
    });
    handle.addEventListener('lostpointercapture',function(){active=null;refresh();});
    handle.addEventListener('keydown',function(event){
      var direction={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]}[event.key];
      if(!direction)return;
      event.preventDefault();
      if(!xy&&!direction[index===0?1:0])return;
      move(index,direction[0],direction[1],true);
    });
  });
  refresh();
  return refresh;
}
function mountCalculator(host,tool,preset,inline,workspace){
  var title=preset?.title;
  host.innerHTML=(inline?'<h3 class="calculator-title">Thử với số của bạn</h3>':'<p class="expr tool-theory" hidden></p><div class="calculator-example"></div>')+
    geometryStage(tool.id)+'<form id="calc-form" data-tool-id="'+tool.id+'">'+form(tool.id,inline)+'</form><div id="calc-output" aria-live="polite"></div>'+
    (tool.id==='graph'?'<div class="graphbox"><canvas width="880" height="450" id="plot" aria-label="Đồ thị hàm số"></canvas></div>':
     tool.id==='expression'&&!inline&&!workspace?'<details class="extra-calculator"><summary>Giải phương trình bậc hai</summary>'+scientificQuadratic()+'</details>':'');
  var f=host.querySelector('#calc-form');
  if(title)f.dataset.formula=title;
  if(preset&&preset.tool===tool.id){
    var presetField=f.querySelector('[data-key="'+preset.field+'"]');
    if(presetField){
      presetField.value=preset.value;
      if(inline)presetField.closest('.field').hidden=true;
    }
  }
  var selectors=Array.from(f.querySelectorAll('select')).filter(function(select){return !['unit-from','unit-to'].includes(select.id);});
  if(title&&tool.id==='combination'){
    for(var key of ['k','p']){
      if(key==='k'?title==='Giai thừa':title!=='Phân phối nhị thức')f.querySelector('#f-'+key).closest('.field').hidden=true;
    }
  }
  var resetUnit=tool.id==='unit'?updateUnits:null;
  if(resetUnit)resetUnit();
  var refreshShape=bindGeometryStage(host,f,tool.id);
  if(refreshShape)f.addEventListener('input',refreshShape);
  f.addEventListener('submit',function(event){event.preventDefault();calculate();});
  f.addEventListener('input',function(){
    host.querySelector('#calc-output').textContent='';
    var graph=host.querySelector('.graphbox');
    if(graph)graph.hidden=true;
  });
  function sample(){
    var entry=calculatorExamples[tool.id];
    var current=values();
    return Array.isArray(entry)?entry:entry[current.op||current.mode||current.shape||current.group];
  }
  function updateExample(){
    var target=host.querySelector('.calculator-example');
    if(target)target.innerHTML=exampleCard(sample(),'Ví dụ của công cụ');
  }
  function loadExample(){
    var current=selectors.map(select=>select.value);
    f.reset();
    selectors.forEach((select,index)=>{select.value=current[index];});
    if(resetUnit)resetUnit();
    var overrides=Object.assign({},sample()[2],formulaInputs[title]);
    Object.entries(overrides).forEach(([key,value])=>{f.querySelector('[data-key="'+key+'"]').value=value;});
    updateToolContext(f,tool);
    updateExample();
    if(refreshShape)refreshShape();
    calculate(true);
  }
  f.addEventListener('change',function(event){
    if(event.target.id==='f-group'&&resetUnit)resetUnit();
    if(event.target.matches('select')){
      updateToolContext(f,tool);
      updateExample();
      if(refreshShape)refreshShape();
    }else if(tool.id==='graph')calculate();
  });
  f.querySelector('[data-example]').addEventListener('click',loadExample);
  if(tool.id==='expression')bindScientificCalculator(f);
  loadExample();
}

function toolOptions(items,selected){
  return modeTopics().map(topic=>{
    var options=items.filter(tool=>topic.tools.includes(tool.id));
    if(!options.length)return '';
    return '<optgroup label="'+esc(topic.title)+'">'+options.map(tool=>'<option value="'+tool.id+'"'+(tool.id===selected?' selected':'')+'>'+esc(tool.title)+'</option>').join('')+'</optgroup>';
  }).join('');
}
function renderTools(){
  var list=matchingTools();
  var tool=list.find(item=>item.id===state.tool);
  if(!tool){
    app.innerHTML='<div class="page-title"><h1>Công cụ tính toán</h1></div>'+
      (list.length?topicSections(list,[]):'<div class="empty"><strong>Không tìm thấy công cụ</strong><button class="btn outline" data-reset="1">Xóa tìm kiếm</button></div>');
    drawCardPreviews();
    return;
  }
  app.innerHTML='<div class="filter-bar tool-picker"><button class="btn outline" data-view="tools">← Công cụ theo chủ đề</button>'+
    '<div class="filter-select"><label for="tool-select">Công cụ</label><select id="tool-select">'+toolOptions(list,tool.id)+'</select></div></div>'+
    '<section class="panel calculator-page"><h1>'+esc(tool.title)+'</h1><div id="tool-content"></div></section>';
  mountCalculator(document.getElementById('tool-content'),tool,null,false);
}
function calculatorPage(){
  app.innerHTML='<section class="panel calculator-page"><div class="page-title"><h1>Máy tính khoa học</h1>'+
    '<a class="btn outline" href="https://edu.casio.com/intl/software/emulators/classwiz-cpnet/" target="_blank" rel="noopener">ClassWiz fx-580VN X</a></div><div id="tool-content"></div></section>';
  mountCalculator(document.getElementById('tool-content'),tools[0],null,false);
}
var angleModels=[
  {title:'Góc kề bù',rule:'Hai góc kề bù có tổng bằng 180°.',limits:[[12,168]],initial:[58],labels:['P']},
  {title:'Góc nội tiếp',rule:'Góc ở tâm bằng hai lần góc nội tiếp cùng chắn một cung.',limits:[[-78,-14],[14,78],[100,260]],initial:[-43,47,199],labels:['A','B','C']},
  {title:'Tứ giác nội tiếp',rule:'Hai góc đối diện của tứ giác nội tiếp có tổng bằng 180°.',limits:[[-167,-103],[-77,-13],[13,77],[103,167]],initial:[-138,-58,42,133],labels:['A','B','C','D']}
];
var angleModelIndex=0;
var geometryGroups=[
  ['Góc',[
    ['angle-measurement-practice','Đo góc','Kéo tia và đo bằng thước đo góc.','trig'],
    ['angle-rules','Quy tắc về góc','Thử góc kề bù, góc phụ nhau và các góc quanh một điểm.','trig']
  ]],
  ['Đường tròn',[
    ['angle-at-the-centre-circle-theorem','Góc ở tâm và góc nội tiếp','So sánh hai góc cùng chắn một cung.','circle-chord'],
    ['angle-in-a-semicircle','Góc chắn đường kính','Kéo đỉnh và quan sát góc vuông.','circle-chord'],
    ['angles-in-the-same-segment','Góc nội tiếp cùng chắn cung','Di chuyển hai đỉnh và so sánh số đo.','circle-chord'],
    ['opposite-angles-in-a-cyclic-quadrilateral','Tứ giác nội tiếp','Kéo các đỉnh để kiểm tra tổng hai góc đối diện.','circle-chord'],
    ['perpendicular-from-the-centre-to-a-chord','Đường vuông góc với dây','Kéo dây và kiểm tra hai đoạn ở hai bên trung điểm.','circle-chord'],
    ['angle-between-a-tangent-and-a-radius','Tiếp tuyến và bán kính','Trượt tiếp điểm và quan sát góc vuông.','circle-chord'],
    ['two-tangents-from-a-point','Hai tiếp tuyến từ một điểm','Di chuyển điểm ngoài đường tròn và so độ dài.','circle-chord'],
    ['alternate-segment-theorem','Góc giữa tiếp tuyến và dây cung','So với góc nội tiếp chắn cùng cung.','circle-chord'],
    ['discover-the-value-of-pi','Khám phá số π','Đổi kích thước đường tròn và so chu vi với đường kính.','geometry']
  ]],
  ['Tọa độ và đồ thị',[
    ['quadrilaterals-on-a-coordinate-grid','Tứ giác trên lưới tọa độ','Kéo bốn đỉnh để tạo các dạng tứ giác.','coordinate'],
    ['midpoint-of-a-line-segment','Trung điểm đoạn thẳng','Kéo hai đầu mút và xác định trung điểm.','coordinate'],
    ['equation-of-a-straight-line','Đồ thị đường thẳng','Điều chỉnh hệ số góc và tung độ gốc.','linear'],
    ['equation-of-a-line-through-two-points','Đường thẳng qua hai điểm','Kéo A và B để thay đổi phương trình.','coordinate']
  ]],
  ['Đa giác và diện tích',[
    ['pythagoras-theorem','Định lý Pythagoras','Kéo đỉnh tam giác vuông và so diện tích ba hình vuông.','pythag'],
    ['polygon-explorer','Khám phá đa giác','Kéo các đỉnh để quan sát góc trong và góc ngoài.','heron'],
    ['area-of-a-rectangle','Diện tích hình chữ nhật','Đổi hai cạnh và đếm ô vuông.','rectangle'],
    ['area-of-a-parallelogram','Diện tích hình bình hành','Biến đổi hình bình hành về hình chữ nhật.','parallelogram'],
    ['area-of-a-triangle','Diện tích tam giác','So sánh diện tích tam giác với hình chữ nhật.','heron'],
    ['area-of-a-trapezium','Diện tích hình thang','Thay đổi hai đáy và quan sát cách ghép hình.','trapezium']
  ]]
];
var geometryExamples={
  "angle-measurement-practice": [
    "Bật thước đo góc rồi kéo tia.",
    "So số đo trên thước với số đo bên cạnh. Góc vuông có số đo 90°."
  ],
  "angle-rules": [
    "Chọn Góc kề bù. Nếu góc thứ nhất là 65°, tìm góc còn lại.",
    "180° − 65° = 115°. Kéo tia rồi kiểm tra tổng vẫn bằng 180°."
  ],
  "angle-at-the-centre-circle-theorem": [
    "Quan sát hai góc chắn cùng một cung. Ví dụ góc ở tâm bằng 100°.",
    "Góc nội tiếp bằng 100°/2 = 50°."
  ],
  "angle-in-a-semicircle": [
    "Kéo đỉnh còn lại trong khi giữ hai đầu đường kính.",
    "Góc chắn đường kính luôn bằng 90°."
  ],
  "angles-in-the-same-segment": [
    "Kéo một trong hai đỉnh về một vị trí khác trên cùng cung chứa đỉnh.",
    "Hai góc nội tiếp cùng chắn một cung vẫn bằng nhau."
  ],
  "opposite-angles-in-a-cyclic-quadrilateral": [
    "Ví dụ góc A bằng 110°. Dự đoán góc C trước khi xem số đo.",
    "Góc C bằng 180° − 110° = 70°. Kiểm tra cặp B và D tương tự."
  ],
  "perpendicular-from-the-centre-to-a-chord": [
    "Nếu một nửa dây dài 4 đơn vị, nửa còn lại dài bao nhiêu?",
    "Đường qua tâm vuông góc với dây chia dây thành hai nửa bằng nhau. Nửa kia dài 4."
  ],
  "angle-between-a-tangent-and-a-radius": [
    "Kéo tiếp điểm dọc theo đường tròn.",
    "Góc giữa tiếp tuyến và bán kính tại tiếp điểm giữ 90°."
  ],
  "two-tangents-from-a-point": [
    "Di chuyển điểm P ngoài đường tròn.",
    "Hai đoạn từ P đến hai tiếp điểm có cùng độ dài."
  ],
  "alternate-segment-theorem": [
    "Quan sát góc giữa tiếp tuyến và dây. Tìm góc nội tiếp chắn cung tương ứng.",
    "Hai góc bằng nhau khi chọn đúng cung."
  ],
  "discover-the-value-of-pi": [
    "Bật Trải chu vi thành đoạn thẳng rồi đổi bán kính.",
    "Ví dụ đường kính 4 thì chu vi 4π. Tỉ số C/d vẫn bằng π."
  ],
  "quadrilaterals-on-a-coordinate-grid": [
    "Thử tạo tứ giác với A(0; 0), B(4; 0), C(4; 2), D(0; 2).",
    "Các cạnh đối song song, bốn góc vuông và diện tích là 8 đơn vị²."
  ],
  "midpoint-of-a-line-segment": [
    "Ví dụ đặt A(−2; 0), B(4; 2).",
    "Tọa độ trung điểm là trung bình từng cặp tọa độ. M(1; 1)."
  ],
  "equation-of-a-straight-line": [
    "Thử đường thẳng y = 2x + 1.",
    "Đồ thị cắt Oy tại (0; 1). Tăng x thêm 1 thì y tăng 2."
  ],
  "equation-of-a-line-through-two-points": [
    "Ví dụ chọn A(0; 1), B(2; 5).",
    "Hệ số góc (5 − 1)/(2 − 0) = 2. Phương trình y = 2x + 1."
  ],
  "pythagoras-theorem": [
    "Đổi độ dài hai cạnh góc vuông thành 3 và 4.",
    "Diện tích các hình vuông tương ứng là 9 và 16. Hình vuông trên cạnh huyền có diện tích 25."
  ],
  "polygon-explorer": [
    "Chọn 5 cạnh rồi kéo một đỉnh.",
    "Khi hình vẫn là ngũ giác đơn, tổng góc trong là 540°."
  ],
  "area-of-a-rectangle": [
    "Bật lưới. Ví dụ hình rộng 4 ô, cao 3 ô.",
    "Đếm 3 hàng, mỗi hàng 4 ô. Diện tích 12 ô vuông."
  ],
  "area-of-a-parallelogram": [
    "Giữ đáy và chiều cao, kéo để thay đổi độ nghiêng.",
    "Diện tích vẫn là đáy × chiều cao vuông góc, chẳng hạn 6 × 3 = 18."
  ],
  "area-of-a-triangle": [
    "Ví dụ tam giác có đáy 6, chiều cao tương ứng 4.",
    "Hình chữ nhật cùng đáy và chiều cao có diện tích 24. Tam giác có diện tích 12."
  ],
  "area-of-a-trapezium": [
    "Ví dụ hai đáy 6 và 4, chiều cao 3.",
    "Trung bình hai đáy là 5. Diện tích bằng 5 × 3 = 15."
  ]
};
var geometryModels=geometryGroups.flatMap(function(group){return group[1];});
function nativeGeometryModel(model,host){
  var id=model[0];
  var coordinates=['quadrilaterals-on-a-coordinate-grid','midpoint-of-a-line-segment','equation-of-a-straight-line','equation-of-a-line-through-two-points'];
  var areaShapes=['area-of-a-rectangle','area-of-a-parallelogram','area-of-a-triangle','area-of-a-trapezium'];
  var plots=coordinates.includes(id),area=areaShapes.includes(id),polygon=id==='polygon-explorer';
  var angle=['angle-measurement-practice','angle-rules'].includes(id);
  var circle=!plots&&!area&&!polygon&&!angle&&id!=='pythagoras-theorem';
  var options=polygon?'<label>Số cạnh <select id="vertex-count">'+[3,4,5,6,7,8].map(n=>'<option'+(n===5?' selected':'')+'>'+n+'</option>').join('')+'</select></label>':
    angle?(id==='angle-rules'?'<label>Quy tắc <select id="angle-rule"><option value="180">Góc kề bù</option><option value="90">Góc phụ nhau</option><option value="360">Góc quanh một điểm</option></select></label>':'')+'<label><input id="show-angle-scale" type="checkbox"> Hiện thước đo góc</label>':
    area?'<label><input id="show-area-grid" type="checkbox" checked> Hiện lưới ô vuông</label>':
    id==='discover-the-value-of-pi'?'<label><input id="unroll-circle" type="checkbox"> Trải chu vi thành đoạn thẳng</label>':'';
  host.innerHTML='<section class="angle-workbench native-model"><div class="angle-figure"><p>Kéo điểm trên hình hoặc dùng các phím mũi tên.</p>'+
    '<div class="geometry-board angle-board"><canvas width="640" height="384" aria-hidden="true"></canvas><div class="native-handles"></div></div>'+
    (options?'<div class="model-options">'+options+'</div>':'')+'</div><aside class="angle-readout"><h2>Số đo</h2><div class="angle-measures"></div>'+
    exampleCard(geometryExamples[id],'Thử với hình mẫu',true)+'<button class="btn outline" type="button" data-model-reset>Nạp lại hình mẫu</button></aside></section>';
  var board=host.querySelector('.geometry-board'),ctx=board.querySelector('canvas').getContext('2d');
  var handleLayer=host.querySelector('.native-handles'),readout=host.querySelector('.angle-measures');
  var blue='#1762c1',green='#078c73',red='#c64457',ink='#183652';
  var origin=[320,190],rad=Math.PI/180,units=24,radius=124;
  var p=[],labels=[],draw=[],active=null;
  function zip(p0,p1,fn){return p0.map((v,i)=>fn(v,p1[i]));}
  function sub(a,b){return zip(a,b,(x,y)=>x-y);}
  function plus(a,b){return zip(a,b,(x,y)=>x+y);}
  function mul(a,n){return a.map(x=>x*n);}
  function mid(a,b){return mul(plus(a,b),.5);}
  function distance(a,b){return Math.hypot(...sub(a,b));}
  function clamp(v,min,max){return Math.min(Math.max(v,min),max);}
  function polar(deg,r=radius,o=origin){return plus(o,[Math.cos(deg*rad)*r,-Math.sin(deg*rad)*r]);}
  function angleBetween(a,o,b){
    var u=sub(a,o),v=sub(b,o),den=Math.hypot(...u)*Math.hypot(...v);
    return den===0?0:Math.acos(clamp((u[0]*v[0]+u[1]*v[1])/den,-1,1))/rad;
  }
  function path(points,stroke=blue,fill){
    ctx.beginPath();
    points.forEach((point,i)=>i?ctx.lineTo(...point):ctx.moveTo(...point));
    if(fill){ctx.closePath();ctx.fillStyle=fill;ctx.fill();}
    ctx.strokeStyle=stroke;ctx.lineWidth=2.4;ctx.stroke();
  }
  function ring(o,r,stroke='#8ba7c8'){
    ctx.beginPath();ctx.arc(...o,r,0,Math.PI*2);ctx.strokeStyle=stroke;ctx.lineWidth=2;ctx.stroke();
  }
  function label(value,point,color=ink){
    ctx.fillStyle=color;ctx.font='650 17px system-ui';ctx.fillText(String(value),point[0],point[1]);
  }
  function arc(o,a,b,color,r=40){
    ctx.beginPath();ctx.arc(...o,r,-b*rad,-a*rad);ctx.strokeStyle=color;ctx.lineWidth=4;ctx.stroke();
  }
  function grid(axis){
    for(var x=origin[0]%units;x<640;x+=units)path([[x,0],[x,384]],'#e0e8f3');
    for(var y=origin[1]%units;y<384;y+=units)path([[0,y],[640,y]],'#e0e8f3');
    if(axis){path([[12,origin[1]],[628,origin[1]]],'#8195ae');path([[origin[0],11],[origin[0],373]],'#8195ae');label('x',[608,180]);label('y',[328,24]);}
  }
  function show(rows){
    readout.innerHTML=rows.map(row=>'<div><span>'+esc(row[0])+'</span><strong>'+esc(row[1])+'</strong></div>').join('');
  }
  function round(v){return fmt(Math.round(v*100)/100);}
  function deg(v){return round(v)+'°';}
  function circleSetup(){
    switch(id){
      case 'angle-in-a-semicircle': return {points:[58],limits:[[12,168]],names:['C']};
      case 'angles-in-the-same-segment':return {points:[-53,43,137,232],limits:[[-75,-20],[20,75],[108,163],[195,251]],names:['A','B','C','D']};
      case 'opposite-angles-in-a-cyclic-quadrilateral':return {points:[-140,-56,44,132],limits:[[-168,-107],[-73,-16],[16,77],[103,168]],names:['A','B','C','D']};
      case 'perpendicular-from-the-centre-to-a-chord':return {points:[33,125],limits:[[12,72],[95,166]],names:['A','B']};
      case 'angle-between-a-tangent-and-a-radius':return {points:[48],limits:[[-180,180]],names:['T']};
      case 'two-tangents-from-a-point':return {points:[[490,119]],names:['P']};
      case 'alternate-segment-theorem':return {points:[-22,78,182],limits:[[-65,-8],[27,111],[145,231]],names:['T','A','C']};
      case 'discover-the-value-of-pi':return {points:[[432,190]],names:['A']};
      default:return {points:[-43,47,199],limits:[[-78,-14],[14,78],[100,260]],names:['A','B','C']};
    }
  }
  var circular=circle?circleSetup():null;
  function reset(){
    if(plots){
      var quad=id===coordinates[0];
      p=quad?[[-5,3],[4,4],[6,-3],[-3,-4]]:[[-4,-2],[5,3]];
      labels=quad?['A','B','C','D']:['A','B'];
    }else if(circle){p=structuredClone(circular.points);labels=circular.names;}
    else if(angle){p=[id==='angle-rules'?58:125];labels=['P'];}
    else if(polygon){
      var count=Number(host.querySelector('#vertex-count').value);
      p=Array(count).fill(124);labels='ABCDEFGH'.slice(0,count).split('');
    }else if(area){p=[[463,111]];labels=['P'];}
    else{p=[3,4];labels=['B','C'];}
    attachHandles();
    refresh();
  }
  function renderCoordinates(){
    grid(true);
    draw=p.map(point=>[origin[0]+point[0]*units,origin[1]-point[1]*units]);
    var notation=point=>'('+point.map(round).join('; ')+')';
    var rows=p.map((point,i)=>[labels[i],notation(point)]);
    if(p.length===4){
      path(draw,blue,'#d1eaff');
      var sum=p.reduce((total,point,i)=>{var next=p[(i+1)%4];return total+point[0]*next[1]-point[1]*next[0];},0);
      rows.push(['Diện tích theo đường bao',round(Math.abs(sum)/2)]);
    }else{
      var a=p[0],b=p[1],delta=sub(b,a),m=delta[0]?delta[1]/delta[0]:null;
      var M=mid(draw[0],draw[1]);
      if(distance(a,b)>0){
        if(id!==coordinates[1]){
          var vector=mul(sub(draw[1],draw[0]),40/Math.max(1,distance(...draw)));
          path([sub(draw[0],mul(vector,20)),plus(draw[1],mul(vector,20))],'#a4bfd9');
        }
        path(draw);ring(M,4,green);label('M',plus(M,[7,18]),green);
      }
      rows.push(['Trung điểm M',notation(mid(a,b))]);
      if(id!==coordinates[1]){
        var intercept=m===null?null:a[1]-m*a[0];
        rows.push(['Hệ số góc',m===null?'Không xác định':round(m)],
          ['Phương trình',distance(a,b)===0?'Hai điểm trùng nhau':m===null?'x = '+round(a[0]):
            'y = '+round(m)+'x '+(intercept<0?'− ':'+ ')+round(Math.abs(intercept))]);
      }
    }
    show(rows);
  }
  function renderAngle(){
    var value=p[0],base=Number(host.querySelector('#angle-rule')?.value||360),rule=id==='angle-rules';
    draw=[polar(value,140)];
    path([origin,polar(0,163)]);path([origin,draw[0]]);
    arc(origin,0,value,red);
    if(rule){path([origin,polar(base,163)]);arc(origin,value,base,green,55);}
    if(host.querySelector('#show-angle-scale').checked){
      for(var a=0;a<360;a+=10){
        path([polar(a,103),polar(a,a%30?110:115)],'#a3b8cf');
        if(a%30===0)label(a,plus(polar(a,127),[-8,5]));
      }
    }
    var type=value===90?'Góc vuông':value===180?'Góc bẹt':value<90?'Góc nhọn':value<180?'Góc tù':'Góc phản';
    show(rule?[['Góc thứ nhất',deg(value)],['Góc thứ hai',deg(base-value)],['Tổng',deg(base)]]:
      [['Số đo',deg(value)],['Loại góc',type]]);
  }
  function renderCircle(){
    var rows=[],A,B,C,D,T,P,M,T1,T2,d,vector;
    if(id==='discover-the-value-of-pi'){
      var r=distance(p[0],origin);draw=[p[0]];
      ring(origin,r);path([origin,p[0]]);label('O',plus(origin,[-17,15]));
      if(host.querySelector('#unroll-circle').checked){
        var diameter=2*r*.55,circumference=Math.PI*diameter;
        path([[44,325],[44+diameter,325]],red);label('Đường kính',[44,316],red);
        path([[44,354],[44+circumference,354]],blue);label('Chu vi',[44,376],blue);
      }
      show([['Đường kính',round(2*r/units)],['Chu vi',round(2*Math.PI*r/units)],['Chu vi ÷ đường kính','π ≈ 3,14159']]);return;
    }
    ring(origin,radius);
    draw=circular.limits?p.map(a=>polar(a)):p;
    [A,B,C,D]=draw;
    switch(id){
      case 'angle-in-a-semicircle':
        A=polar(180);B=polar(0);C=draw[0];
        path([A,B,C,A],blue,'#e5f2ff');label('A',plus(A,[-22,17]));label('B',plus(B,[8,17]));
        rows=[['∠BAC',deg(angleBetween(B,A,C))],['∠ABC',deg(angleBetween(A,B,C))],['∠ACB',deg(angleBetween(A,C,B))]];break;
      case 'angles-in-the-same-segment':
        path([A,C,B,D,A]);path([A,B],red);
        rows=[['∠ACB',deg(angleBetween(A,C,B))],['∠ADB',deg(angleBetween(A,D,B))]];break;
      case 'opposite-angles-in-a-cyclic-quadrilateral':
        path(draw,blue,'#e5f2ff');
        rows=[['∠A',deg(angleBetween(D,A,B))],['∠C',deg(angleBetween(B,C,D))],['∠A + ∠C',deg(angleBetween(D,A,B)+angleBetween(B,C,D))]];break;
      case 'perpendicular-from-the-centre-to-a-chord':
        M=mid(A,B);path([A,B]);path([origin,M],red);label('O',plus(origin,[8,19]));label('M',plus(M,[5,-8]),red);
        rows=[['AM',round(distance(A,M)/units)],['MB',round(distance(M,B)/units)],['Góc giữa OM và AB',deg(angleBetween(origin,M,A))]];break;
      case 'angle-between-a-tangent-and-a-radius':
        T=A;vector=sub(T,origin);P=plus(T,mul([-vector[1],vector[0]],.75));
        path([sub(T,sub(P,T)),P],blue);path([origin,T],red);label('O',plus(origin,[7,20]));
        rows=[['Góc giữa bán kính và tiếp tuyến',deg(angleBetween(origin,T,P))]];break;
      case 'two-tangents-from-a-point':
        P=A;vector=sub(P,origin);d=Math.hypot(...vector);
        var heading=Math.atan2(-vector[1],vector[0])/rad,diff=Math.acos(radius/d)/rad;
        T1=polar(heading-diff);T2=polar(heading+diff);
        path([T1,P,T2]);path([T1,origin,T2],red);label('A',plus(T1,[8,12]));label('B',plus(T2,[8,-8]));
        rows=[['PA',round(distance(P,T1)/units)],['PB',round(distance(P,T2)/units)]];break;
      case 'alternate-segment-theorem':
        T=A;A=B;vector=sub(T,origin);P=plus(T,mul([vector[1],-vector[0]],.74));
        path([T,A,C,T]);path([sub(T,sub(P,T)),P],red);label('P',plus(P,[4,-8]));
        rows=[['∠ATP',deg(angleBetween(A,T,P))],['∠ACT',deg(angleBetween(A,C,T))]];break;
      default:
        path([A,C,B,A]);path([A,origin,B],red);label('O',plus(origin,[-17,20]));
        rows=[['∠AOB',deg(angleBetween(A,origin,B))],['∠ACB',deg(angleBetween(A,C,B))]];
    }
    show(rows);
  }
  function renderArea(){
    if(host.querySelector('#show-area-grid').checked)grid(false);
    var x0=159,y0=310,top=p[0][1],right=p[0][0],height=(y0-top)/units,base=(right-x0)/units;
    var shape;
    if(id===areaShapes[0])shape=[[x0,y0],[x0,top],[right,top],[right,y0]];
    else if(id===areaShapes[1])shape=[[x0,y0],[x0+44,top],[right+44,top],[right,y0]];
    else if(id===areaShapes[2])shape=[[x0,y0],[right,top],[right,y0]];
    else shape=[[x0,y0],[x0+48,top],[right,top],[right+48,y0]];
    draw=[[right,top]];
    path(shape,blue,'#cfe8ffca');
    if(id!==areaShapes[2])path([[right-53,top],[right-53,y0]],green);
    var result=id===areaShapes[2]?base*height/2:base*height;
    var rows=[['Chiều cao',round(height)]];
    if(id===areaShapes[3])rows.push(['Đáy nhỏ',round(base-2)],['Đáy lớn',round(base+2)]);
    else rows.push(['Đáy',round(base)]);
    show(rows.concat([['Diện tích',round(result)]]));
  }
  function renderPolygon(){
    draw=p.map((r,i)=>polar(90+360*i/p.length,r));
    path(draw,blue,'#d8ecff');
    var angles=draw.map((point,i)=>angleBetween(draw[(i+p.length-1)%p.length],point,draw[(i+1)%p.length]));
    show([['Số cạnh',p.length],['Tổng góc trong',deg(angles.reduce((sum,value)=>sum+value,0))],...angles.map((value,i)=>['∠'+labels[i],deg(value)])]);
  }
  function renderPythagoras(){
    var main=[250,230],a=p[0],b=p[1],B=[250,230-a*22],C=[250+b*22,230];
    function square(start,end,fill,caption){
      var delta=sub(end,start),perp=[delta[1],-delta[0]];
      path([start,end,plus(end,perp),plus(start,perp)],blue,fill);
      label(caption,plus(mid(start,end),plus(mul(perp,.5),[-8,5])));
    }
    draw=[B,C];square(main,B,'#e1efff','a²');square(B,C,'#e4e9ff','c²');square(C,main,'#d8f1eb','b²');
    path([main,B,C,main],ink,'#fff');
    path([[250,214],[266,214],[266,230]],green);
    var h=Math.hypot(a,b);
    show([['a²',round(a*a)],['b²',round(b*b)],['a² + b² = c²',round(a*a+b*b)],['c',round(h)]]);
  }
  function refresh(){
    ctx.clearRect(0,0,640,384);
    if(plots)renderCoordinates();
    else if(angle)renderAngle();
    else if(circle)renderCircle();
    else if(area)renderArea();
    else if(polygon)renderPolygon();
    else renderPythagoras();
    Array.from(handleLayer.children).forEach((handle,i)=>{
      handle.style.left=draw[i][0]/640*100+'%';
      handle.style.top=draw[i][1]/384*100+'%';
    });
  }
  function move(i,x,y){
    var vector=[x-origin[0],y-origin[1]],heading=Math.atan2(-vector[1],vector[0])/rad;
    if(plots){
      var candidate=[clamp(Math.round(vector[0]/units),-12,12),clamp(Math.round(-vector[1]/units),-7,7)];
      if(id===coordinates[2])candidate[0]=p[i][0];
      if(p.length!==4||!p.some((point,k)=>k!==i&&distance(point,candidate)===0))p[i]=candidate;
    }else if(angle||circle&&circular.limits){
      var limits=angle?[8,Number(host.querySelector('#angle-rule')?.value||360)-8]:circular.limits[i],middle=(limits[0]+limits[1])/2;
      p[i]=clamp(Math.round(middle+((heading-middle+540)%360)-180),...limits);
    }else if(polygon)p[i]=clamp(Math.round(distance([x,y],origin)),106,147);
    else if(circle){
      if(id==='discover-the-value-of-pi')p[i]=polar(0,clamp(x-origin[0],45,155));
      else p[i]=polar(heading,clamp(Math.hypot(...vector),radius+24,176));
    }else if(area)p[i]=[clamp(Math.round((x-159)/12)*12+159,267,525),clamp(Math.round((y-310)/12)*12+310,70,262)];
    else p[i]=clamp(Math.round((i===0?230-y:x-250)/11)/2,1,5);
    refresh();
  }
  function attachHandles(){
    handleLayer.replaceChildren();
    labels.forEach((name,i)=>{
      var button=document.createElement('button');
      button.type='button';button.className='geometry-handle';button.textContent=name;button.setAttribute('aria-label','Điểm '+name);
      button.addEventListener('pointerdown',event=>{if(active===null&&event.button===0){active=event.pointerId;button.setPointerCapture(active);}});
      button.addEventListener('lostpointercapture',()=>{active=null;});
      button.addEventListener('pointermove',event=>{
        if(active!==event.pointerId)return;
        var box=board.getBoundingClientRect();
        move(i,(event.clientX-box.left)*640/box.width,(event.clientY-box.top)*384/box.height);
      });
      button.addEventListener('keydown',event=>{
        var dir={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]}[event.key];
        if(!dir)return;
        event.preventDefault();
        var step=plots?24:area?12:14;
        move(i,...plus(draw[i],mul(dir,step)));
      });
      handleLayer.append(button);
    });
  }
  host.querySelector('[data-model-reset]').addEventListener('click',reset);
  host.querySelector('#vertex-count')?.addEventListener('change',reset);
  host.querySelector('#show-angle-scale')?.addEventListener('change',refresh);
  host.querySelector('#angle-rule')?.addEventListener('change',reset);
  host.querySelector('#show-area-grid')?.addEventListener('change',refresh);
  host.querySelector('#unroll-circle')?.addEventListener('change',refresh);
  reset();
}

var geometryFilter='all';
var activeGeometryModel=null;
function geometryGallery(){
  var title='<div class="page-title"><h1>Mô hình hình học</h1></div>';
  if(activeGeometryModel){
    var model=geometryModels.find(function(item){return item[0]===activeGeometryModel;});
    app.innerHTML='<div class="geometry-gallery-heading"><div><button class="btn outline" type="button" data-geometry-gallery-back>← Danh mục</button><h1>'+esc(model[1])+'</h1></div>'+
      '</div><div id="native-model-content"></div>';
    nativeGeometryModel(model,document.getElementById('native-model-content'));
    return;
  }
  var results=geometryFilter==='all'?geometryModels:geometryGroups[Number(geometryFilter)][1];
  app.innerHTML=title+'<div class="filters catalog-filters" role="group" aria-label="Chuyên đề hình học">'+
    [['all','Tất cả']].concat(geometryGroups.map(function(group,index){return [String(index),group[0]];})).map(function(group){
      var active=group[0]===geometryFilter;
      return '<button type="button" class="chip'+(active?' active':'')+'" data-geometry-gallery-filter="'+group[0]+'" aria-pressed="'+active+'">'+esc(group[1])+'</button>';
    }).join('')+'</div><div class="tool-cards">'+results.map(function(model){
      return '<article class="tool-card"><div class="card-copy"><h3>'+esc(model[1])+'</h3><p>'+esc(model[2])+'</p></div>'+
        '<figure class="card-preview"><canvas width="300" height="240" data-preview="'+model[3]+'" aria-hidden="true"></canvas></figure>'+
        '<button type="button" class="card-launch" data-geometry-gallery-model="'+model[0]+'" aria-label="Mở '+esc(model[1])+'">Mở</button></article>';
    }).join('')+'</div>';
  drawCardPreviews();
}
function geometryLab(){
  var model=angleModels[angleModelIndex];
  app.innerHTML='<div class="page-title"><h1>Thao tác hình học</h1></div><div class="filters lab-options" role="group" aria-label="Chọn mô hình">'+
    angleModels.map(function(item,index){
      return '<button type="button" class="chip'+(index===angleModelIndex?' active':'')+'" data-angle-model="'+index+'" aria-pressed="'+(index===angleModelIndex)+'">'+item.title+'</button>';
    }).join('')+'</div><section class="angle-workbench"><div class="angle-figure"><p>Kéo điểm có chữ trên hình hoặc dùng phím mũi tên.</p>'+
    '<div class="geometry-board angle-board"><canvas width="640" height="384" aria-hidden="true"></canvas>'+
    model.labels.map(function(label,index){return '<button class="geometry-handle" type="button" data-angle-handle="'+index+'" aria-label="Điểm '+label+'">'+label+'</button>';}).join('')+
    '</div></div><aside class="angle-readout"><h2>'+model.title+'</h2><div class="angle-measures"></div><p>'+model.rule+'</p>'+
    exampleCard(geometryExamples[['angle-rules','angle-at-the-centre-circle-theorem','opposite-angles-in-a-cyclic-quadrilateral'][angleModelIndex]],'Thử với hình mẫu',true)+
    '<button class="btn outline" id="reset-angle-model" type="button">Nạp ví dụ</button></aside></section>';
  bindAngleModel(model,angleModelIndex);
}
function bindAngleModel(model,kind){
  var board=app.querySelector('.angle-board');
  var ctx=board.querySelector('canvas').getContext('2d');
  var handles=Array.from(board.querySelectorAll('[data-angle-handle]'));
  var measures=app.querySelector('.angle-measures');
  var degrees=model.initial.slice();
  var center=[320,200],radius=132,held=null;
  var radians=Math.PI/180;
  var rotate=function(angle){return [center[0]+radius*Math.cos(angle*radians),center[1]-radius*Math.sin(angle*radians)];};
  function line(points,color,width){
    ctx.beginPath();
    points.forEach(function(point,index){if(index)ctx.lineTo(...point);else ctx.moveTo(...point);});
    ctx.strokeStyle=color;ctx.lineWidth=width;ctx.stroke();
  }
  function drawArc(p,r,start,end,color){
    ctx.beginPath();ctx.arc(p[0],p[1],r,-end*radians,-start*radians);ctx.strokeStyle=color;ctx.lineWidth=4;ctx.stroke();
  }
  function angleAt(first,point,third){
    var a=[first[0]-point[0],first[1]-point[1]],b=[third[0]-point[0],third[1]-point[1]];
    var cosine=(a[0]*b[0]+a[1]*b[1])/(Math.hypot(...a)*Math.hypot(...b));
    return Math.acos(Math.max(-1,Math.min(1,cosine)))/radians;
  }
  function drawInterior(a,vertex,b,r,color){
    var start=Math.atan2(vertex[1]-a[1],a[0]-vertex[0])/radians;
    var end=Math.atan2(vertex[1]-b[1],b[0]-vertex[0])/radians;
    var delta=((end-start+540)%360)-180;
    drawArc(vertex,r,Math.min(start,start+delta),Math.max(start,start+delta),color);
  }
  function text(value,p){
    ctx.fillStyle='#163655';ctx.font='600 18px system-ui';ctx.fillText(value,p[0],p[1]);
  }
  function entry(name,value){return '<div><span>'+name+'</span><strong>'+fmt(Math.round(value*10)/10)+'°</strong></div>';}
  function refresh(){
    ctx.clearRect(0,0,640,384);
    var points=degrees.map(rotate),blue='#2164ce',coral='#df5c44',teal='#0a9278';
    if(kind===0){
      line([[95,200],[545,200]],blue,3);
      line([center,points[0]],blue,3);
      text('A',[76,207]);text('O',[310,231]);text('B',[555,207]);
      drawArc(center,42,0,degrees[0],coral);
      drawArc(center,52,degrees[0],180,teal);
      measures.innerHTML=entry('∠POB',degrees[0])+entry('∠AOP',180-degrees[0])+entry('Tổng',180);
    }else{
      ctx.beginPath();ctx.arc(center[0],center[1],radius,0,Math.PI*2);ctx.strokeStyle='#a6bbd5';ctx.lineWidth=2;ctx.stroke();
      if(kind===1){
        var central=degrees[1]-degrees[0];
        line([points[0],points[2],points[1],points[0]],blue,2.4);
        line([points[0],center,points[1]],coral,2.4);
        drawArc(center,32,degrees[0],degrees[1],coral);
        drawInterior(points[0],points[2],points[1],34,teal);
        text('O',[center[0]-18,center[1]+23]);
        measures.innerHTML=entry('∠AOB',central)+entry('∠ACB',central/2);
      }else{
        line(points.concat([points[0]]),blue,2.4);
        drawInterior(points[3],points[0],points[1],31,coral);
        drawInterior(points[1],points[2],points[3],31,teal);
        var a=angleAt(points[3],points[0],points[1]),c=angleAt(points[1],points[2],points[3]);
        measures.innerHTML=entry('∠A',a)+entry('∠C',c)+entry('Tổng ∠A và ∠C',a+c);
      }
    }
    handles.forEach(function(handle,index){
      handle.style.left=(points[index][0]/640*100)+'%';
      handle.style.top=(points[index][1]/384*100)+'%';
    });
  }
  function move(index,angle){
    var limits=model.limits[index],mid=(limits[0]+limits[1])/2;
    var nearest=mid+((angle-mid+540)%360)-180;
    degrees[index]=Math.max(limits[0],Math.min(limits[1],Math.round(nearest)));
    refresh();
  }
  handles.forEach(function(handle,index){
    handle.addEventListener('pointerdown',function(event){
      if(held!==null||event.button!==0)return;
      held=event.pointerId;
      handle.setPointerCapture(event.pointerId);
      handle.focus({preventScroll:true});
    });
    handle.addEventListener('pointermove',function(event){
      if(held!==event.pointerId)return;
      var bounds=board.getBoundingClientRect();
      var x=(event.clientX-bounds.left)*640/bounds.width-center[0];
      var y=center[1]-(event.clientY-bounds.top)*384/bounds.height;
      if(Math.hypot(x,y)>3)move(index,Math.atan2(y,x)/radians);
    });
    handle.addEventListener('lostpointercapture',function(){held=null;});
    handle.addEventListener('keydown',function(event){
      var step={ArrowLeft:-1,ArrowRight:1,ArrowUp:1,ArrowDown:-1}[event.key];
      if(!step)return;
      event.preventDefault();
      move(index,degrees[index]+step*(event.shiftKey?10:1));
    });
  });
  app.querySelector('#reset-angle-model').addEventListener('click',function(){degrees=model.initial.slice();refresh();});
  refresh();
}
var formulaResultRows={
  'Ước chung lớn nhất và bội chung nhỏ nhất':'Bội chung nhỏ nhất',
  'Biệt thức bậc hai':'Δ','Đỉnh parabol':'Đỉnh I',
  'Chu vi hình vuông':'Chu vi','Chu vi chữ nhật':'Chu vi','Chu vi đường tròn':'Chu vi',
  'Diện tích hình hộp':'Diện tích toàn phần','Diện tích lập phương':'Diện tích toàn phần',
  'Diện tích toàn phần trụ':'Diện tích toàn phần','Diện tích mặt cầu':'Diện tích toàn phần',
  'Trung điểm':'Trung điểm','Hệ số góc':'Hệ số góc','Đường thẳng qua điểm':'Phương trình đường thẳng',
  'Đổi góc sang radian':'Radian','Phương sai tổng thể':'Phương sai tổng thể','Độ lệch chuẩn':'Độ lệch chuẩn tổng thể',
  'Giai thừa':'n!','Chỉnh hợp':'A(n,k)','Phân phối nhị thức':'P(X=k)'
};
var formulaInputs={
  'Đạo hàm hằng số':{a:7,n:0,b:0,x:2},
  'Phương sai tổng thể':{series:'2; 4; 6'},
  'Độ lệch chuẩn':{series:'1; 7'}
};
function openFormula(details){
  if(!details.open)return;
  app.querySelectorAll('.formula[open]').forEach(function(entry){if(entry!==details)entry.open=false;});
  var previous=app.querySelector('.inline-calculator:not(:empty)');
  if(previous&&!details.contains(previous))previous.replaceChildren();
  var host=details.querySelector('.inline-calculator');
  if(host.firstChild)return;
  var formula=formulas[Number(details.dataset.formula)];
  var related=formulaTools.find(function(entry){return entry[3].includes(formula.title);});
  if(!related)return;
  var tool=tools.find(entry=>entry.id===related[0]);
  mountCalculator(host,tool,{tool:tool.id,field:related[1],value:related[2],title:formula.title},true);
}
app.addEventListener('toggle',function(event){if(event.target.matches('.formula'))openFormula(event.target);},true);
app.addEventListener('click',function(event){
  var summary=event.target.closest('.formula > summary');
  if(!summary)return;
  event.preventDefault();
  var details=summary.parentElement;
  details.open=!details.open;
  openFormula(details);
  requestAnimationFrame(function(){
    if(!details.isConnected||!details.open)return;
    var top=summary.getBoundingClientRect().top;
    if(top<0||top>=innerHeight)summary.scrollIntoView({block:'nearest'});
  });
});
app.addEventListener('change',function(event){
  var input=event.target;
  if(input.id==='original-tool-select'){
    navigate({suite:input.value});
    document.getElementById(input.id).focus({preventScroll:true});
    return;
  }
  if(input.id==='tool-select')state.tool=input.value;
  else if(input.id==='formula-category')state.cat=input.value;
  else return;
  render();
  document.getElementById(input.id)?.focus({preventScroll:true});
});
var constructionExamples={
  "sss": [
    "Nhập AB = 6, BC = 5, CA = 5 rồi bấm Dựng hình.",
    "Hai góc ở A và B bằng nhau. Chu vi 16 đơn vị."
  ],
  "sas": [
    "Nhập AB = 6, AC = 4, góc A = 60°.",
    "Hình giữ đúng góc xen giữa. Diện tích là 6 × 4 × sin 60°/2 = 6√3."
  ],
  "asa": [
    "Nhập AB = 6, góc A = 50°, B = 70°.",
    "Góc C còn lại bằng 60°."
  ],
  "rectangle": [
    "Nhập AB = 8, BC = 5.",
    "Bốn góc 90°. Chu vi 26, diện tích 40."
  ],
  "square": [
    "Nhập cạnh AB = 5.",
    "Bốn cạnh bằng nhau, chu vi 20, diện tích 25."
  ],
  "parallelogram": [
    "Nhập AB = 8, AD = 5, góc A = 60°.",
    "Chu vi 26. Góc B = 120°."
  ],
  "rhombus": [
    "Nhập AB = 5, góc A = 60°.",
    "Bốn cạnh bằng nhau, chu vi 20. Góc B = 120°."
  ],
  "trapezoid": [
    "Nhập hai đáy 8 và 5, chiều cao 4, độ lệch ngang 1.",
    "Diện tích (8 + 5) × 4/2 = 26."
  ],
  "regular": [
    "Chọn 5 cạnh, mỗi cạnh dài 4.",
    "Mỗi góc trong bằng 108°, chu vi 20."
  ],
  "circle": [
    "Nhập bán kính 4.",
    "Chu vi 8π và diện tích 16π."
  ],
  "points": [
    "Đặt A(0; 0), B(4; 0), C(0; 3), rồi bấm Nối các điểm.",
    "Được tam giác vuông, cạnh dài 3, 4, 5. Chu vi 12, diện tích 6."
  ]
};
var constructionTypes = {
  sss: ['Tam giác · ba cạnh', [['AB', 6], ['BC', 5], ['CA', 5]]],
  sas: ['Tam giác · hai cạnh và góc xen giữa', [['AB', 6], ['AC', 4], ['Góc A (°)', 60]]],
  asa: ['Tam giác · một cạnh và hai góc kề', [['AB', 6], ['Góc A (°)', 50], ['Góc B (°)', 70]]],
  rectangle: ['Hình chữ nhật', [['AB', 8], ['BC', 5]]],
  square: ['Hình vuông', [['AB', 5]]],
  parallelogram: ['Hình bình hành', [['AB', 8], ['AD', 5], ['Góc A (°)', 60]]],
  rhombus: ['Hình thoi', [['AB', 5], ['Góc A (°)', 60]]],
  trapezoid: ['Hình thang · hai đáy, chiều cao, độ lệch', [['Đáy AB', 8], ['Đáy DC', 5], ['Chiều cao', 4], ['Độ lệch ngang từ A đến D', 1]]],
  regular: ['Đa giác đều', [['Số cạnh', 5], ['Độ dài cạnh', 4]]],
  circle: ['Đường tròn', [['Bán kính', 4]]]
};
var constructionState = {mode:'dimensions', type:'sss', points:[], closed:false, drafts:{}, names:[], unit:'đv', formula:'', shape:null, message:''};
var numberWorkspaceTool = 'fraction';
var radians = Math.PI / 180;
var polygonDistance = (a,b) => Math.hypot(a[0]-b[0], a[1]-b[1]);
var polygonCross = (a,b,c) => (b[0]-a[0])*(c[1]-a[1]) - (b[1]-a[1])*(c[0]-a[0]);
var pointName = i => String.fromCharCode(65+i);

function constructByMeasure(type, values) {
  var [a,b,c,d] = values;
  function angle(v) {
    if (!(v>0 && v<180)) throw Error('Góc phải lớn hơn 0° và nhỏ hơn 180°.');
    return v*radians;
  }
  function polar(length, theta) { return [length*Math.cos(theta), length*Math.sin(theta)]; }
  if (values.some((v,i) => (type!=='trapezoid'||i!==3)&&v<=0)) throw Error('Độ dài, số cạnh và số đo góc phải lớn hơn 0.');
  if (type==='circle') return {kind:type,r:a,points:[]};
  var points = [[0,0],[a,0]];
  var kind = type;
  switch(type) {
  case 'sss': {
    var sides = [a,b,c].sort((x,y)=>x-y);
    if (sides[0]<=sides[2]-sides[1]) throw Error('Tổng hai cạnh ngắn phải lớn hơn cạnh dài nhất.');
    var x = (a*a+c*c-b*b)/(2*a);
    var y = Math.sqrt(Math.max(0,(c-x)*(c+x)));
    points.push([x,y]);
    break;
  }
  case 'sas':
    points.push(polar(b,angle(c)));
    break;
  case 'asa':
    if (b+c>=180) throw Error('Tổng hai góc kề phải nhỏ hơn 180°.');
    points.push(polar(a*Math.sin(angle(c))/Math.sin((180-b-c)*radians),angle(b)));
    break;
  case 'rectangle':
  case 'square': {
    var height = type==='square'?a:b;
    points.push([a,height],[0,height]);
    break;
  }
  case 'parallelogram':
  case 'rhombus': {
    var [dx,dy] = type==='rhombus'?polar(a,angle(b)):polar(b,angle(c));
    points.push([a+dx,dy],[dx,dy]);
    break;
  }
  case 'trapezoid':
    if (a===b) throw Error('Hai đáy bằng nhau sẽ tạo hình bình hành. Hãy chọn hai đáy khác nhau.');
    points.push([d+b,c],[d,c]);
    break;
  case 'regular': {
    if (!Number.isInteger(a)||a<3||a>12) throw Error('Nhập số cạnh nguyên từ 3 đến 12.');
    var radius = b/(2*Math.sin(Math.PI/a));
    points = Array.from({length:a},(_,i)=>polar(radius,2*Math.PI*i/a));
    break;
  }
  }
  if (['sss','sas','asa'].includes(type)) kind='triangle';
  return {kind, points};
}

function measurePolygon(points) {
  var count = points.length;
  var edges = points.map((p,i)=>polygonDistance(p,points[(i+1)%count]));
  var origin = points[0];
  var twiceArea = points.reduce((sum,p,i)=>sum+polygonCross(origin,p,points[(i+1)%count]),0);
  var scale = Math.max(...edges);
  var tolerance = scale*scale*1e-12;
  if (!Number.isFinite(twiceArea)||edges.some(edge=>edge<=scale*1e-12)||
      points.some((p,i)=>Math.abs(polygonCross(points.at(i-1),p,points[(i+1)%count]))<=tolerance)) {
    throw Error('Hình suy biến. Kiểm tra các đỉnh trùng hoặc ba đỉnh liên tiếp thẳng hàng.');
  }
  function intersects(a,b,c,d) {
    var side = (p,q,r) => Math.sign(polygonCross(p,q,r));
    function overlaps(x,y,z,w) { return Math.max(Math.min(x,y),Math.min(z,w))<=Math.min(Math.max(x,y),Math.max(z,w)); }
    return overlaps(a[0],b[0],c[0],d[0])&&overlaps(a[1],b[1],c[1],d[1])&&
      side(a,b,c)*side(a,b,d)<=0&&side(c,d,a)*side(c,d,b)<=0;
  }
  for (var i=0;i<count;i++) {
    for (var j=i+2;j<count;j++) {
      if (i===0&&j===count-1) continue;
      if (intersects(points[i],points[(i+1)%count],points[j],points[(j+1)%count])) {
        throw Error('Các cạnh cắt nhau. Đặt điểm lần lượt theo đường bao của hình.');
      }
    }
  }
  if (Math.abs(twiceArea)<=tolerance) throw Error('Hình suy biến. Diện tích phải lớn hơn 0.');
  var angles = points.map((p,i)=>{
    var prev = points.at(i-1), next = points[(i+1)%count];
    var dot = (prev[0]-p[0])*(next[0]-p[0])+(prev[1]-p[1])*(next[1]-p[1]);
    var turn = polygonCross(prev,p,next);
    var degrees = Math.atan2(Math.abs(turn),dot)/radians;
    return Math.sign(turn)===Math.sign(twiceArea)?degrees:360-degrees;
  });
  return {edges, angles};
}

function boardSelect(label,options) {
  return '<label>'+esc(label)+'<select>'+options.map(([key,name])=>'<option value="'+esc(key)+'">'+esc(name)+'</option>').join('')+'</select></label>';
}

function constructionPage() {
  var model = constructionState;
  app.innerHTML = '<div class="page-title"><h1>Bảng dựng hình</h1></div><div class="math-board">'+
    '<section class="panel board-drawing"><div class="board-actions" role="group" aria-label="Cách dựng">'+
    '<button type="button" class="btn outline" data-board-mode="dimensions">Nhập số đo</button>'+
    '<button type="button" class="btn outline" data-board-mode="points">Đặt điểm</button></div>'+
    '<div class="board-toolbar" id="board-toolbar"></div><div id="board-message" role="status"></div>'+
    '<svg id="construction-svg" viewBox="0 0 640 400" role="img" aria-label="Bảng vẽ hình học"></svg>'+
    '<div id="board-measures"></div><div id="board-example"></div></section>'+
    '<section class="panel board-math"><h2>Công thức của hình</h2><div class="board-actions" role="group" aria-label="Chọn công thức">'+
    '<button class="btn outline" type="button" data-board-formula="perimeter">Chu vi</button>'+
    '<button class="btn outline" type="button" data-board-formula="area">Diện tích</button></div><div id="board-calculation"></div></section></div>';
  var toolbar = app.querySelector('#board-toolbar');
  var example = app.querySelector('#board-example');
  var message = app.querySelector('#board-message');
  var svg = app.querySelector('#construction-svg');
  var measures = app.querySelector('#board-measures');
  var calculation = app.querySelector('#board-calculation');
  function names() { return model.shape?.points.map((_,i)=>model.names[i]||pointName(i))||[]; }
  function currentLabels() {
    if (model.mode==='dimensions') return constructionTypes[model.type][0];
    return (model.shape.points.length===3?'Tam giác ':'Đa giác ')+names().join(' ');
  }
  function updateDrawing() {
    message.textContent = model.message;
    var shape = model.shape;
    var points = shape?.points || (model.mode==='points'?model.points:[]);
    var screen = points;
    if (model.mode==='dimensions' && points.length) {
      var minX=Math.min(...points.map(p=>p[0])), maxX=Math.max(...points.map(p=>p[0]));
      var minY=Math.min(...points.map(p=>p[1])), maxY=Math.max(...points.map(p=>p[1]));
      var scale=Math.min(450/(maxX-minX),245/(maxY-minY));
      screen = points.map(([x,y])=>[320+(x-(minX+maxX)/2)*scale,200-(y-(minY+maxY)/2)*scale]);
    } else if (model.mode==='points') screen = points.map(([x,y])=>[320+x*32,200-y*32]);
    var labels = names();
    var line = screen.map(p=>p.join(',')).join(' ');
    var parts = ['<defs><pattern id="board-grid" x="0" y="8" width="32" height="32" patternUnits="userSpaceOnUse"><path d="M 32 0 H 0 V 32"/></pattern></defs><rect width="640" height="400" fill="url(#board-grid)"/>'];
    if (model.mode==='points') parts.push('<path class="board-axes" d="M0 200H640M320 0V400"/><text x="328" y="216">0</text>');
    if (shape?.kind==='circle') {
      parts.push('<circle class="board-shape" cx="320" cy="200" r="126"/><path class="board-radius" d="M320 200h126"/><circle class="board-dot" cx="320" cy="200" r="4"/><text x="302" y="223">O</text><text x="355" y="190">r = '+fmt(shape.r)+'</text>');
    } else if (screen.length) {
      parts.push(shape?'<polygon class="board-shape" points="'+line+'"/>':'<polyline class="board-shape board-open" points="'+line+'"/>');
      var center = screen.reduce(([x,y],p)=>[x+p[0]/screen.length,y+p[1]/screen.length],[0,0]);
      screen.forEach(([x,y],i)=>{
        var outwardX = x-center[0], outwardY = y-center[1];
        var length = Math.hypot(outwardX,outwardY)||1;
        parts.push('<circle class="board-dot" cx="'+x+'" cy="'+y+'" r="4.5"/><text class="board-vertex" text-anchor="middle" x="'+(x+outwardX/length*16)+'" y="'+(y+outwardY/length*16+4)+'">'+esc(labels[i]||pointName(i))+'</text>');
        if (!shape) return;
        var prev=screen.at(i-1), next=screen[(i+1)%screen.length];
        var from=Math.atan2(prev[1]-y,prev[0]-x);
        var sweep=polygonCross([x,y],prev,next)>0?1:-1;
        if (shape.angles[i]>180) sweep*=-1;
        var theta=shape.angles[i]*radians;
        var radius=Math.min(22,polygonDistance([x,y],prev)*.38,polygonDistance([x,y],next)*.38);
        var location=(t,r)=>[x+Math.cos(t)*r,y+Math.sin(t)*r];
        var start=location(from,radius), end=location(from+sweep*theta,radius);
        parts.push('<path class="board-angle" d="M'+start.join(' ')+' A '+radius+' '+radius+' 0 '+(theta>Math.PI?1:0)+' '+(sweep>0?1:0)+' '+end.join(' ')+'"/>');
        var [tx,ty]=location(from+sweep*theta/2,radius+17);
        parts.push('<text class="board-degree" text-anchor="middle" x="'+tx+'" y="'+(ty+4)+'">'+fmt(Math.round(shape.angles[i]*100)/100)+'°</text>');
        var edgeLength=polygonDistance([x,y],next);
        var orientation=Math.sign(screen.reduce((sum,p,j)=>sum+polygonCross(screen[0],p,screen[(j+1)%screen.length]),0));
        var mx=(x+next[0])/2+(next[1]-y)/edgeLength*orientation*13;
        var my=(y+next[1])/2-(next[0]-x)/edgeLength*orientation*13;
        parts.push('<text class="board-length" text-anchor="middle" x="'+mx+'" y="'+(my+4)+'">'+fmt(Math.round(shape.edges[i]*100)/100)+'</text>');
      });
    }
    svg.innerHTML = parts.join('');
    svg.setAttribute('aria-label',shape?currentLabels():'Bảng vẽ hình học');
  }
  function updateMeasures() {
    var shape=model.shape;
    if (!shape) { measures.innerHTML=''; return; }
    var labels=names();
    measures.innerHTML='<div class="board-meta"><label>Đơn vị <input id="board-unit" value="'+esc(model.unit)+'" maxlength="12"></label>'+
      labels.map((name,i)=>'<label>Đỉnh '+pointName(i)+' <input data-vertex="'+i+'" value="'+esc(name)+'" maxlength="8"></label>').join('')+'</div>'+
      (shape.kind==='circle'?'<p>Bán kính r = '+fmt(shape.r)+' '+esc(model.unit)+'</p>':
        '<ul class="board-readings">'+labels.map((name,i)=>'<li><strong>'+esc(name)+' → '+esc(labels[(i+1)%labels.length])+'</strong> '+fmt(shape.edges[i])+' '+esc(model.unit)+' <span>∠'+esc(name)+' = '+fmt(shape.angles[i])+'°</span></li>').join('')+'</ul>');
  }
  function showShape(shape) {
    model.shape=shape;
    updateDrawing();
    updateMeasures();
    updateCalculation();
  }
  function drawDimensions() {
    var inputs=Array.from(toolbar.querySelectorAll('[data-dimension]'));
    model.drafts[model.type]=inputs.map(input=>input.value);
    try {
      var dimensions=inputs.map(input=>numeric(input.value,input.labels[0].textContent));
      var shape=constructByMeasure(model.type,dimensions);
      if (shape.points.length) Object.assign(shape,measurePolygon(shape.points));
      model.message='';
      showShape(shape);
    } catch(error) { model.message=error.message; showShape(null); }
  }
  function closePolygon() {
    try {
      if (model.points.length<3) throw Error('Đặt ít nhất ba điểm để nối hình.');
      var shape={kind:model.points.length===3?'triangle':'polygon',points:model.points};
      Object.assign(shape,measurePolygon(shape.points));
      model.closed=true;
      model.message='';
      renderToolbar();
      showShape(shape);
      toolbar.querySelector('#board-undo').focus();
    } catch(error) { model.message=error.message; updateDrawing(); }
  }
  function addPoint(x,y) {
    if (model.closed) return;
    if (model.points.some(p=>p[0]===x&&p[1]===y)) {
      if (model.points[0][0]===x&&model.points[0][1]===y&&model.points.length>=3) closePolygon();
      else { model.message='Điểm này đã có trên bảng.'; updateDrawing(); }
      return;
    }
    if (model.points.length>=12) { model.message='Tối đa 12 đỉnh. Bấm Nối các điểm để khép hình.'; updateDrawing(); return; }
    model.points.push([x,y]);
    model.message='';
    updateDrawing();
  }
  function renderToolbar() {
    example.innerHTML=exampleCard(constructionExamples[model.mode==='points'?'points':model.type]);
    app.querySelectorAll('[data-board-mode]').forEach(button=>button.setAttribute('aria-pressed',button.dataset.boardMode===model.mode));
    svg.classList.toggle('board-point-mode',model.mode==='points'&&!model.closed);
    if (model.mode==='dimensions') {
      var entries=Object.entries(constructionTypes).map(([key,[title]])=>[key,title]);
      toolbar.innerHTML='<form id="board-size-form">'+boardSelect('Loại hình',entries)+'<div class="fields" id="board-dimensions"></div><button class="btn blue" type="submit">Dựng hình</button> <button class="btn outline" id="board-load-example" type="button">Nạp ví dụ</button></form>';
      var picker=toolbar.querySelector('select');
      picker.value=model.type;
      var fields=constructionTypes[model.type][1];
      toolbar.querySelector('#board-dimensions').innerHTML=fields.map(([label,value],i)=>
        '<div class="field"><label for="board-dim-'+i+'">'+esc(label)+'</label><input data-dimension id="board-dim-'+i+'" type="number" step="any" value="'+
        esc(model.drafts[model.type]?.[i]??value)+'"></div>').join('');
      return;
    }
    toolbar.innerHTML='<p class="calc-note">'+(model.closed?'Hình đã khép kín. Hoàn tác để sửa điểm cuối.':'Bấm lên lưới hoặc nhập tọa độ. Đặt các đỉnh theo thứ tự quanh đường bao.')+'</p>'+
      (model.closed?'':'<form id="board-point-form" class="board-actions"><label>x <input type="number" name="x" min="-9" max="9" step="any" required></label>'+
        '<label>y <input type="number" name="y" min="-5" max="5" step="any" required></label><button type="submit" class="btn outline">Thêm điểm</button></form>')+
      '<div class="board-actions"><button class="btn blue" type="button" id="board-close" '+(model.closed?'disabled':'')+'>Nối các điểm</button>'+
      '<button class="btn outline" type="button" id="board-undo">Hoàn tác</button><button class="btn outline" type="button" id="board-clear">Xóa bảng</button><button class="btn outline" type="button" id="board-load-example">Nạp ví dụ</button></div>';
  }
  function updateCalculation() {
    app.querySelectorAll('[data-board-formula]').forEach(button=>{
      button.disabled=!model.shape;
      button.setAttribute('aria-pressed',button.dataset.boardFormula===model.formula);
    });
    if (!model.shape) { calculation.innerHTML='<p class="calc-note">Dựng một hình để mở công thức.</p>'; return; }
    if (!model.formula) { calculation.innerHTML='<p class="calc-note">Chọn Chu vi hoặc Diện tích để thế số.</p>'; return; }
    mountShapeFormula(calculation,model.shape,names(),model.formula,model.unit);
  }
  function enterMode() {
    model.message='';
    renderToolbar();
    if (model.mode==='dimensions') drawDimensions();
    else if (model.closed) closePolygon();
    else showShape(null);
  }
  toolbar.addEventListener('input',event=>{
    if (event.target.matches('[data-dimension]')) {
      model.drafts[model.type]=Array.from(toolbar.querySelectorAll('[data-dimension]'),input=>input.value);
    }
  });
  toolbar.addEventListener('change',event=>{
    if (!event.target.matches('select')) return;
    model.drafts[model.type]=Array.from(toolbar.querySelectorAll('[data-dimension]'),input=>input.value);
    model.type=event.target.value;
    enterMode();
    toolbar.querySelector('select').focus();
  });
  toolbar.addEventListener('submit',event=>{
    event.preventDefault();
    if (model.mode==='dimensions') drawDimensions();
    else {
      var data=new FormData(event.target);
      addPoint(Number(data.get('x')),Number(data.get('y')));
    }
  });
  svg.addEventListener('click',event=>{
    if (model.mode!=='points'||model.closed) return;
    var point=new DOMPoint(event.clientX,event.clientY).matrixTransform(svg.getScreenCTM().inverse());
    var x=(point.x-320)/32, y=(200-point.y)/32;
    var existing=model.points.find(p=>polygonDistance(p,[x,y])<.4);
    if (existing) addPoint(...existing);
    else if (Math.abs(x)<=9.5&&Math.abs(y)<=5.5) addPoint(Math.round(x),Math.round(y));
  });
  measures.addEventListener('change',event=>{
    var input=event.target;
    if (input.id==='board-unit') model.unit=input.value.trim()||'đv';
    else if (input.matches('[data-vertex]')) {
      var i=Number(input.dataset.vertex);
      var name=input.value.trim()||pointName(i);
      if (names().some((other,j)=>j!==i&&other.toUpperCase()===name.toUpperCase())) {
        input.value=names()[i];
        model.message='Tên mỗi đỉnh phải khác nhau.';
        updateDrawing();
        return;
      }
      model.names[i]=name;
    } else return;
    model.message='';
    updateDrawing();
    updateMeasures();
    updateCalculation();
  });
  app.querySelector('.math-board').addEventListener('click',event=>{
    var button=event.target.closest('button');
    if (!button) return;
    if (button.dataset.boardMode&&button.dataset.boardMode!==model.mode) {
      if (model.mode==='dimensions') model.drafts[model.type]=Array.from(toolbar.querySelectorAll('[data-dimension]'),input=>input.value);
      model.mode=button.dataset.boardMode;
      enterMode();
    } else if (button.id==='board-load-example') {
      if(model.mode==='dimensions'){
        model.drafts[model.type]=constructionTypes[model.type][1].map(([,value])=>String(value));
        enterMode();
        toolbar.querySelector('#board-load-example').focus();
      }else{
        model.points=[[0,0],[4,0],[0,3]];
        model.closed=false;
        model.names=[];
        closePolygon();
      }
    } else if (button.dataset.boardFormula) {
      model.formula=button.dataset.boardFormula;
      updateCalculation();
    } else if (button.id==='board-close') closePolygon();
    else if (button.id==='board-undo'||button.id==='board-clear') {
      if (button.id==='board-clear') { model.points=[]; model.names=[]; }
      else if (!model.closed) model.points.pop();
      model.closed=false;
      enterMode();
      toolbar.querySelector('#'+button.id).focus();
    }
  });
  enterMode();
}

function mountShapeFormula(host,shape,names,operation,unit) {
  var area=operation==='area';
  var symbol=area?'S':'P';
  var fields=[], expression, evaluate;
  var edge=(i,symbol=['a','b','c','d'][i])=>
    ['Cạnh '+symbol+' ('+names[i]+' → '+names[(i+1)%names.length]+')',shape.edges[i]];
  var height=()=>Math.abs(polygonCross(shape.points[0],shape.points[1],shape.points.at(-1)))/shape.edges[0];
  var numbers=values=>values.map(value=>fmt(value));
  if (shape.kind==='circle') {
    fields=[['Bán kính r',shape.r]];
    expression=area?'π × r²':'2 × π × r';
    evaluate=([r])=>[area?Math.PI*r*r:2*Math.PI*r,area?'π × '+fmt(r)+'²':'2 × π × '+fmt(r)];
  } else if (shape.kind==='square'||(!area&&shape.kind==='rhombus')) {
    fields=[edge(0)];
    expression=area?'a²':'4 × a';
    evaluate=([a])=>[area?a*a:4*a,area?fmt(a)+'²':'4 × '+fmt(a)];
  } else if (shape.kind==='rectangle'||(!area&&shape.kind==='parallelogram')) {
    fields=[edge(0),edge(1)];
    expression=area?'a × b':'2 × (a + b)';
    evaluate=([a,b])=>[area?a*b:2*(a+b),area?numbers([a,b]).join(' × '):'2 × ('+numbers([a,b]).join(' + ')+')'];
  } else if (!area) {
    fields=shape.edges.map((_,i)=>edge(i,shape.edges.length>4?'a'+String(i+1).replace(/d/g,d=>String.fromCharCode(8320+Number(d))):undefined));
    expression=fields.length>4?'a₁ + a₂ + … + aₙ':['a','b','c','d'].slice(0,fields.length).join(' + ');
    evaluate=values=>{
      if (shape.kind==='triangle') constructByMeasure('sss',values);
      return [values.reduce((sum,v)=>sum+v,0),numbers(values).join(' + ')];
    };
  } else if (shape.kind==='triangle') {
    fields=shape.edges.map((_,i)=>edge(i));
    expression='√(p × (p − a) × (p − b) × (p − c)), với p = (a + b + c) / 2';
    evaluate=values=>{
      var triangle=constructByMeasure('sss',values);
      measurePolygon(triangle.points);
      var p=values.reduce((sum,v)=>sum+v,0)/2;
      var input=values.map(v=>'('+fmt(p)+' − '+fmt(v)+')').join(' × ');
      return [Math.abs(polygonCross(...triangle.points))/2,'√('+fmt(p)+' × '+input+'), p = ('+numbers(values).join(' + ')+') / 2 = '+fmt(p)];
    };
  } else if (shape.kind==='parallelogram'||shape.kind==='rhombus') {
    fields=[edge(0),['Chiều cao h',height()]];
    expression='a × h';
    evaluate=([a,h])=>{
      if (shape.kind==='rhombus'&&h>a+Number.EPSILON*a*8) throw Error('Chiều cao hình thoi không thể lớn hơn cạnh.');
      return [a*h,numbers([a,h]).join(' × ')];
    };
  } else if (shape.kind==='trapezoid') {
    fields=[edge(0,'a'),edge(2,'b'),['Chiều cao h',height()]];
    expression='(a + b) × h / 2';
    evaluate=([a,b,h])=>[(a+b)*h/2,'('+numbers([a,b]).join(' + ')+') × '+fmt(h)+' / 2'];
  } else if (shape.kind==='regular') {
    fields=[['Số cạnh n',shape.edges.length],['Độ dài cạnh a',shape.edges[0]]];
    expression='n × a² / (4 × tan(180° / n))';
    evaluate=([n,a])=>{
      constructByMeasure('regular',[n,a]);
      return [n*a*a/(4*Math.tan(Math.PI/n)),fmt(n)+' × '+fmt(a)+'² / (4 × tan(180° / '+fmt(n)+'))'];
    };
  } else {
    fields=shape.points.flatMap(([x,y],i)=>[['x của '+names[i],x],['y của '+names[i],y]]);
    expression='½ × |Σ(xᵢyᵢ₊₁ − xᵢ₊₁yᵢ)|, nối đỉnh cuối về đỉnh đầu';
    evaluate=values=>{
      var points=names.map((_,i)=>values.slice(i*2,i*2+2));
      measurePolygon(points);
      var terms=points.map(([x,y],i)=>{
        var next=points[(i+1)%points.length];
        return x*next[1]-next[0]*y;
      });
      var origin=points[0];
      var sum=points.reduce((total,p,i)=>total+polygonCross(origin,p,points[(i+1)%points.length]),0);
      if (!terms.every(Number.isFinite)) throw Error('Tọa độ vượt giới hạn tính toán.');
      return [Math.abs(sum)/2,'½ × |'+numbers(terms).join(' + ')+'|'];
    };
  }
  host.innerHTML='<p class="board-equation">'+esc(symbol+' = '+expression)+'</p>'+
    '<form><div class="fields">'+fields.map(([label,value],i)=>
      '<div class="field"><label for="board-sub-'+i+'">'+esc(label)+'</label><input id="board-sub-'+i+'" type="number" step="any" value="'+Number(value.toPrecision(15))+'"></div>').join('')+
    '</div><div class="board-actions"><button class="btn blue" type="submit">Tính</button>'+
    '<button class="btn outline" type="reset">Lấy số từ hình</button></div></form><div class="board-result" aria-live="polite"></div>';
  var form=host.querySelector('form'), result=host.querySelector('.board-result');
  function calculateShape() {
    try {
      var values=Array.from(form.querySelectorAll('input'),(input,i)=>{
        var value=numeric(input.value,fields[i][0]);
        if (shape.kind==='polygon'&&area) return value;
        return positive(value,fields[i][0]);
      });
      var [value,substitution]=evaluate(values);
      if (!Number.isFinite(value)||value<=0) throw Error('Kết quả vượt giới hạn tính toán hoặc hình bị suy biến.');
      result.innerHTML='<div class="output"><small>Thế số</small><p>'+esc(symbol+' = '+substitution)+'</p><h3>'+esc(symbol+' = '+fmt(value)+' '+unit+(area?'²':''))+'</h3></div>';
    } catch(error) {
      result.innerHTML='<p class="board-error">'+esc(error.message)+'</p>';
    }
  }
  form.addEventListener('submit',event=>{event.preventDefault();calculateShape();});
  form.addEventListener('input',()=>{result.textContent='';});
  form.addEventListener('reset',()=>{result.textContent='';});
}

function numberWorkspace() {
  var options=tools.filter(toolInMode);
  app.innerHTML='<div class="page-title"><h1>Bàn tính công thức</h1></div><div class="math-board number-board">'+
    '<section class="panel board-math"><h2 class="board-tool-heading">Chọn phép tính</h2>'+
    '<div class="board-tool-picker field"><label>Chọn phép tính<select>'+toolOptions(options,numberWorkspaceTool)+'</select></label></div>'+
    '<div class="board-tool-list" role="group" aria-label="Phép tính">'+modeTopics().map(topic=>'<div class="board-tool-group"><h3>'+esc(topic.title)+'</h3>'+options.filter(tool=>topic.tools.includes(tool.id)).map(tool=>
      '<button class="btn outline" type="button" data-number-formula="'+tool.id+'">'+esc(tool.title)+'</button>').join('')+'</div>').join('')+'</div></section>'+
    '<section class="panel calculator-page"><h2 id="number-formula-title"></h2><div id="number-formula-content"></div></section></div>';
  var host=app.querySelector('#number-formula-content');
  var picker=app.querySelector('.board-tool-picker select');
  picker.addEventListener('change',()=>select(picker.value));
  function select(id) {
    numberWorkspaceTool=id;
    picker.value=id;
    var tool=options.find(item=>item.id===id);
    app.querySelector('#number-formula-title').textContent=tool.title;
    app.querySelectorAll('[data-number-formula]').forEach(button=>button.setAttribute('aria-pressed',button.dataset.numberFormula===id));
    mountCalculator(host,tool,null,false,true);
  }
  app.querySelector('.board-tool-list').addEventListener('click',event=>{
    var id=event.target.closest('button')?.dataset.numberFormula;
    if (id&&id!==numberWorkspaceTool) select(id);
  });
  select(numberWorkspaceTool);
}

var workspaceTheory = {
  fraction:{'+':'a/b + c/d = (ad + bc) / bd','-':'a/b − c/d = (ad − bc) / bd','*':'a/b × c/d = ac / bd','/':'(a/b) : (c/d) = ad / bc'},
  percent:{of:'Giá trị = p × x / 100',ratio:'Tỉ lệ (%) = 100 × a / b',change:'Thay đổi (%) = 100 × (B − A) / A, với A > 0.'},
  linear:'ax + b = 0 ⇒ x = −b/a, với a ≠ 0.',
  quadratic:'Δ = b² − 4ac. Với a ≠ 0 và Δ ≥ 0, x = (−b ± √Δ) / (2a).',
  system:'D = a₁b₂ − a₂b₁. Khi D ≠ 0, x = (c₁b₂ − c₂b₁)/D và y = (a₁c₂ − a₂c₁)/D.',
  number:'BCNN(n,m) = n × m / ƯCLN(n,m). Tìm ƯCLN bằng phép chia Euclid.',
  statistics:'Trung bình = Σxᵢ / n. Phương sai tổng thể = Σ(xᵢ − x̄)² / n.',
  frequency:'Trung bình = Σ(xᵢ × fᵢ) / Σfᵢ, với fᵢ là tần số.',
  combination:'C(n,k) = n! / (k!(n−k)!). P(X=k) = C(n,k) × pᵏ × (1−p)ⁿ⁻ᵏ.',
  graph:{linear:'y = ax + b',quadratic:'y = ax² + bx + c'},
  trig:'Đổi độ sang radian bằng α × π / 180. tan α = sin α / cos α khi cos α ≠ 0.',
  derivative:'Với f(x) = axⁿ + b và n ≥ 1, f′(x₀) = an × x₀ⁿ⁻¹. Nếu n = 0 thì f′(x₀) = 0.'
};

function numericSubstitution(tool,v,title) {
  var {a,b,c,d,a1,b1,c1,a2,b2,c2,n,m,op,mode}=v;
  var f=value=>Number(value)<0?'('+fmt(Number(value))+')':fmt(Number(value));
  switch(tool) {
  case 'fraction':
    if (op==='*') return f(a)+' × '+f(c)+' / ('+f(b)+' × '+f(d)+')';
    if (op==='/') return f(a)+' × '+f(d)+' / ('+f(b)+' × '+f(c)+')';
    return '('+f(a)+' × '+f(d)+' '+(op==='-'?'−':'+')+' '+f(b)+' × '+f(c)+') / ('+f(b)+' × '+f(d)+')';
  case 'percent':
    if (mode==='of') return f(a)+' × '+f(b)+' / 100';
    if (mode==='ratio') return '100 × '+f(a)+' / '+f(b);
    return '100 × ('+f(b)+' − '+f(a)+') / '+f(a);
  case 'linear': return Number(a)===0?'0x + '+f(b)+' = 0':'x = −'+f(b)+' / '+f(a);
  case 'quadratic': return Number(a)===0?f(b)+'x + '+f(c)+' = 0':'Δ = '+f(b)+'² − 4 × '+f(a)+' × '+f(c);
  case 'system': return 'D = '+f(a1)+' × '+f(b2)+' − '+f(a2)+' × '+f(b1)+'. Vế phải ('+fmt(Number(c1))+', '+fmt(Number(c2))+')';
  case 'number': return 'BCNN = '+f(n)+' × '+f(m)+' / '+fmt(gcd(Number(n),Number(m)));
  case 'logarithm': return 'ln'+f(v.x)+' / ln'+f(a);
  case 'trig': return 'Góc theo radian = '+f(v.angle)+' × π / 180';
  case 'derivative': return Number(n)===0?'f′(x₀) = 0':'f′(x₀) = '+f(a)+' × '+f(n)+' × '+f(v.x)+'^'+(Number(n)-1);
  case 'geometry':
    if(title?.startsWith('Chu vi')){
      if(v.shape==='circle')return '2 × π × '+f(v.r);
      return v.shape==='square'?'4 × '+f(a):'2 × ('+f(a)+' + '+f(b)+')';
    }
    return {rectangle:f(a)+' × '+f(b),square:f(a)+'²',triangle:f(a)+' × '+f(v.h)+' / 2',
      parallelogram:f(a)+' × '+f(v.h),trapezoid:'('+f(a)+' + '+f(b)+') × '+f(v.h)+' / 2',
      rhombus:f(a)+' × '+f(v.h),circle:'π × '+f(v.r)+'²'}[v.shape];
  case 'pythag': return mode==='ab'?'√('+f(a)+'² + '+f(b)+'²)':'√('+f(b)+'² − '+f(a)+'²)';
  case 'heron': {
    var half=(Number(a)+Number(b)+Number(c))/2;
    return 'p = '+fmt(half)+'. S = √('+fmt(half)+' × '+[a,b,c].map(side=>'('+fmt(half)+' − '+fmt(Number(side))+')').join(' × ')+')';
  }
  case 'graph': return 'y = '+(mode==='quadratic'?f(a)+'x² + '+f(b)+'x + '+f(c):f(a)+'x + '+f(b));
  case 'combination':
    if(title==='Giai thừa')return Number(n)===0?'0! = 1':f(n)+'!';
    if(title==='Chỉnh hợp')return f(n)+'! / '+f(Number(n)-Number(v.k))+'!';
    if(title==='Phân phối nhị thức')return 'C('+n+', '+v.k+') × '+f(v.p)+'^'+v.k+' × (1 − '+f(v.p)+')^'+(Number(n)-Number(v.k));
    return 'C('+fmt(Number(n))+', '+fmt(Number(v.k))+') = '+f(n)+'! / ('+f(v.k)+'! × '+f(Number(n)-Number(v.k))+'!)';
  default: return '';
  }
}

function render(){
  activeNav();
  if(state.page==='home')home();
  else if(state.page==='search')searchPage();
  else if(state.page==='tools')renderTools();
  else if(state.page==='original')originalPage();
  else if(state.page==='original-suite')originalSuitePage();
  else if(state.page==='calculator')calculatorPage();
  else if(state.page==='geometry-lab')geometryLab();
  else if(state.page==='board')state.mode==='geometry'?constructionPage():numberWorkspace();
  else if(state.page==='geometry-models')geometryGallery();
  else formulaPage(state.page==='favorites');
}
function values(){var o={};document.querySelectorAll('#calc-form [data-key]').forEach(function(el){o[el.dataset.key]=el.value;});return o;}
function numeric(x,label){if(x===undefined||String(x).trim()==='')throw Error('Thiếu giá trị '+label);var v=Number(x);if(!Number.isFinite(v))throw Error('Giá trị '+label+' không hợp lệ');return v;}
function positive(v,label){if(v<=0)throw Error(label+' phải lớn hơn 0');return v;}
function whole(v,label){if(!Number.isSafeInteger(v))throw Error(label+' phải là số nguyên trong giới hạn an toàn');return v;}
function gcd(a,b){a=Math.abs(a);b=Math.abs(b);while(b){var t=b;b=a%b;a=t;}return a;}
function factorial(n){var r=1n;for(var i=2n;i<=BigInt(n);i++)r*=i;return r;}
function choose(n,k){k=Math.min(k,n-k);var r=1n;for(var i=1;i<=k;i++)r=r*BigInt(n-k+i)/BigInt(i);return r;}
function output(main,rows,note){
  var el=document.getElementById('calc-output');
  if(!el)return;
  var form=document.getElementById('calc-form'),title=form.dataset.formula;
  rows=rows||[];
  var focus=formulaResultRows[title];
  if(focus){
    var row=rows.find(item=>item[0]===focus);
    if(row){
      var supplemental=main;
      main=title+' = '+row[1];
      rows=form.dataset.toolId==='combination'?[]:[['Kết quả liên quan',supplemental],...rows.filter(item=>item!==row)];
    }
  }
  var sub=numericSubstitution(form.dataset.toolId,values(),title);
  if(sub)rows=[['Thế số',sub],...rows];
  el.innerHTML='<div class="output"><small>'+(el.dataset.example==='true'?'Kết quả ví dụ':'Kết quả')+'</small><h3>'+esc(main)+'</h3>'+(rows||[]).map(function(p){return '<div class="row"><span>'+esc(p[0])+'</span><b>'+esc(p[1])+'</b></div>';}).join('')+(note?'<p class="calc-note">'+esc(note)+'</p>':'')+'</div>';}
function err(s){var el=document.getElementById('calc-output');if(el)el.innerHTML='<div class="output error"><small>THÔNG BÁO</small><h3>'+esc(s)+'</h3></div>';}
var calculatorMemory={answer:null,value:0};
function evalExpr(input,degrees){
var s=String(input).replace(/×/g,'*').replace(/÷/g,'/').replace(/−/g,'-').replace(/π/g,'pi').replace(/\s+/g,'');
if(!s||s.length>160)throw Error('Biểu thức rỗng hoặc quá dài');
var i=0,steps=0,deg=degrees?Math.PI/180:1;
function tick(){if(++steps>1200)throw Error('Biểu thức quá phức tạp');}
function take(c){if(s.charAt(i)===c){i++;return true;}return false;}
function atom(){tick();
if(take('(')){var z=sum();if(!take(')'))throw Error('Thiếu dấu đóng ngoặc');return z;}
var m=s.slice(i).match(/^(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?/);
if(m){i+=m[0].length;return Number(m[0]);}
m=s.slice(i).match(/^[a-zA-Z]+/);
if(m){i+=m[0].length;var name=m[0].toLowerCase();if(name==='pi')return Math.PI;if(name==='e')return Math.E;
if(name==='ans'){if(calculatorMemory.answer===null)throw Error('Chưa có kết quả Ans');return calculatorMemory.answer;}
if(!take('('))throw Error('Hàm '+name+' cần dấu ngoặc');var arg=sum();if(!take(')'))throw Error('Thiếu dấu đóng ngoặc');
var fs={sin:function(x){return Math.sin(x*deg);},cos:function(x){return Math.cos(x*deg);},tan:function(x){return Math.tan(x*deg);},asin:function(x){return Math.asin(x)/deg;},acos:function(x){return Math.acos(x)/deg;},atan:function(x){return Math.atan(x)/deg;},sinh:Math.sinh,cosh:Math.cosh,tanh:Math.tanh,asinh:Math.asinh,acosh:Math.acosh,atanh:Math.atanh,sqrt:Math.sqrt,cbrt:Math.cbrt,ln:Math.log,log:Math.log10,abs:Math.abs,exp:Math.exp};
if(!Object.hasOwn(fs,name))throw Error('Hàm không hỗ trợ: '+name);return fs[name](arg);}
throw Error('Ký tự không hợp lệ tại vị trí '+(i+1));}
function pow(){
  var z=atom();
  while(s[i]==='!'||s[i]==='%'){
    if(take('%'))z/=100;
    else{
      i++;
      if(!Number.isInteger(z)||z<0||z>170)throw Error('Giai thừa cần số nguyên từ 0 đến 170');
      z=Number(factorial(z));
    }
  }
  if(take('^'))z=Math.pow(z,unary());
  return z;
}
function unary(){if(take('+'))return unary();if(take('-'))return -unary();return pow();}
function product(){var z=unary();while(true){if(take('*'))z*=unary();else if(take('/'))z/=unary();else break;}return z;}
function sum(){var z=product();while(true){if(take('+'))z+=product();else if(take('-'))z-=product();else break;}return z;}
var ans=sum();if(i<s.length)throw Error('Biểu thức không đúng cú pháp');if(!Number.isFinite(ans))throw Error('Kết quả không xác định trong tập số thực');return ans;
}
function scientificQuadratic(){
  return '<section class="tool-group"><h3>Giải phương trình ax² + bx + c = 0</h3>'+
    '<form id="scientific-quadratic"><div class="fields">'+field('sci-a','Hệ số a',1)+field('sci-b','Hệ số b',-5)+field('sci-c','Hệ số c',6)+'</div>'+
    '<button class="btn blue" type="submit">Giải phương trình</button></form><p class="output" id="scientific-roots" aria-live="polite"></p></section>';
}
function bindScientificCalculator(form){
  var expression=form.querySelector('#f-expr');
  var memory=form.querySelector('#memory-display');
  function showMemory(){memory.textContent=calculatorMemory.value?'M = '+fmt(calculatorMemory.value):'';memory.hidden=!memory.textContent;}
  showMemory();
  form.querySelector('.keypad').addEventListener('click',function(event){
    var button=event.target.closest('[data-calc-key]');
    if(!button)return;
    var key=button.dataset.calcKey;
    if(key==='='){calculate();return;}
    if(key==='MC'){calculatorMemory.value=0;showMemory();return;}
    if(key==='M+'||key==='M−'){
      try{
        var value=evalExpr(expression.value,form.querySelector('#calc-degrees').checked);
        var next=calculatorMemory.value+(key==='M+'?value:-value);
        if(!Number.isFinite(next))throw Error('Bộ nhớ vượt giới hạn tính toán');
        calculatorMemory.value=next;
        showMemory();
      }catch(error){err(error.message);}
      return;
    }
    if(key==='MR')key='('+calculatorMemory.value+')';
    var start=expression.selectionStart,end=expression.selectionEnd;
    if(key==='AC')expression.value='';
    else if(key==='⌫')expression.setRangeText('',start===end?Math.max(0,start-1):start,end,'end');
    else expression.setRangeText(key,start,end,'end');
    expression.focus();
  });
  form.querySelector('#calc-degrees').addEventListener('change',calculate);
  var quadratic=document.getElementById('scientific-quadratic');
  if(!quadratic)return;
  var result=document.getElementById('scientific-roots');
  function solve(){
    try{
      var coefficients=['a','b','c'].map(function(key){return numeric(quadratic.querySelector('#f-sci-'+key).value,key);});
      var a=coefficients[0],b=coefficients[1],c=coefficients[2];
      if(!a){result.textContent=b?'x = '+fmt(-c/b):c?'Vô nghiệm':'Vô số nghiệm';return;}
      var delta=b*b-4*a*c;
      if(!Number.isFinite(delta))throw Error('Hệ số vượt giới hạn tính toán');
      if(delta<0)result.textContent='x = '+fmt(-b/(2*a))+' ± '+fmt(Math.sqrt(-delta)/(2*Math.abs(a)))+'i';
      else if(delta===0)result.textContent='Nghiệm kép x = '+fmt(-b/(2*a));
      else{
        var q=-.5*(b+Math.sign(b||1)*Math.sqrt(delta));
        result.textContent='x₁ = '+fmt(q/a)+' · x₂ = '+fmt(c/q);
      }
    }catch(error){result.textContent=error.message;}
  }
  quadratic.addEventListener('submit',function(event){event.preventDefault();solve();});
  solve();
}
function decimalIntegerRow(row){
  var decimals=row.map(value=>{
    var [coefficient,exponent='0']=String(value).split('e');
    var digits=coefficient.replace('.','');
    var place=coefficient.includes('.')?coefficient.length-coefficient.indexOf('.')-1:0;
    return [BigInt(digits),Number(exponent)-place];
  });
  var scale=Math.min(...decimals.map(([,place])=>place));
  return {
    scale,
    values:decimals.map(([integer,place])=>integer*10n**BigInt(place-scale))
  };
}
function bigintMantissa(value){
  if(value===0n)return [0,0];
  var digits=(value<0n?-value:value).toString();
  var head=digits.slice(0,16);
  return [(value<0n?-1:1)*Number(head)/10**(head.length-1),digits.length-1];
}
function determinantRatio(numerator,denominator){
  if(!numerator)return 0;
  var [a,exponentA]=bigintMantissa(numerator),[b,exponentB]=bigintMantissa(denominator);
  var value=Number((a/b)+'e'+(exponentA-exponentB));
  if(!Number.isFinite(value)||value===0)throw Error('Nghiệm vượt giới hạn biểu diễn số.');
  return value;
}
function calculate(example){try{
document.getElementById('calc-output').dataset.example=String(example===true);
var v=values(),N=function(k){return numeric(v[k],k);},a,b,c,d,h,r,n,m,D;
switch(document.getElementById('calc-form').dataset.toolId){
case 'expression':
var degrees=document.getElementById('calc-degrees').checked;
var answer=evalExpr(v.expr,degrees);
if(example!==true)calculatorMemory.answer=answer;
output(fmt(answer),[['Biểu thức',v.expr]],degrees?'Góc theo độ.':'Góc theo radian.');break;
case 'fraction':
a=whole(N('a'),'a');b=whole(N('b'),'b');c=whole(N('c'),'c');d=whole(N('d'),'d');
if(b===0||d===0)throw Error('Mẫu số không được bằng 0');
var t,u;if(v.op==='+'){t=a*d+c*b;u=b*d;}else if(v.op==='-'){t=a*d-c*b;u=b*d;}else if(v.op==='*'){t=a*c;u=b*d;}else{if(c===0)throw Error('Không được chia cho phân số 0');t=a*d;u=b*c;}
if(!Number.isSafeInteger(t)||!Number.isSafeInteger(u))throw Error('Phân số vượt giới hạn số nguyên chính xác');
if(u<0){u=-u;t=-t;}var g=gcd(t,u)||1;output(fmt(t/g)+'/'+fmt(u/g),[['Dạng thập phân',fmt(t/u)],['Rút gọn',fmt(t/g)+'/'+fmt(u/g)]]);break;
case 'percent':
a=N('a');b=N('b');if(v.mode==='of')output(fmt(a*b/100),[['Công thức','a × b / 100']]);else if(v.mode==='ratio'){if(!b)throw Error('Mẫu số b phải khác 0');output(fmt(a/b*100)+'%');}else{if(a<=0)throw Error('Nhập giá trị ban đầu A lớn hơn 0 để tính phần trăm tăng giảm.');var pct=(b-a)/a*100;if(!Number.isFinite(pct))throw Error('Kết quả vượt giới hạn tính toán.');output(fmt(pct)+'%',[['Thay đổi tuyệt đối',fmt(b-a)],['Chiều thay đổi',pct===0?'Không đổi':pct>0?'Tăng':'Giảm']]);}break;
case 'linear':a=N('a');b=N('b');output(a===0?(b===0?'Vô số nghiệm':'Vô nghiệm'):'x = '+fmt(-b/a),[['Công thức','ax+b=0']]);break;
case 'quadratic':
a=N('a');b=N('b');c=N('c');if(a===0){output(b===0?(c===0?'Vô số nghiệm':'Vô nghiệm'):'x = '+fmt(-c/b),[['Loại','Phương trình bậc nhất']]);break;}
D=b*b-4*a*c;if(D<0)output('Không có nghiệm thực',[['Δ',fmt(D)]]);else if(D===0)output('x = '+fmt(-b/(2*a)),[['Δ','0'],['Loại','Nghiệm kép']]);else{var z=Math.sqrt(D);output('x₁ = '+fmt((-b+z)/(2*a)),[['x₂',fmt((-b-z)/(2*a))],['Δ',fmt(D)]]);}break;
case 'system': {
  var first=decimalIntegerRow([N('a1'),N('b1'),N('c1')]);
  var second=decimalIntegerRow([N('a2'),N('b2'),N('c2')]);
  var [a1,b1,c1]=first.values,[a2,b2,c2]=second.values;
  var D=a1*b2-a2*b1, dx=c1*b2-c2*b1, dy=a1*c2-a2*c1;
  var [mantissa,place]=bigintMantissa(D);
  var exponent=place+first.scale+second.scale;
  var decimal=Number(mantissa+'e'+exponent);
  var determinant=!D?'0':Number.isFinite(decimal)&&decimal!==0?fmt(decimal):fmt(mantissa)+' × 10^'+exponent;
  var rowInfo=[['Định thức D',determinant]];
  var contradictory=(!a1&&!b1&&c1!==0n)||(!a2&&!b2&&c2!==0n);
  if(contradictory||!D){
    output(!contradictory&&!dx&&!dy?'Vô số nghiệm':'Vô nghiệm',rowInfo);
  }else{
    output('x = '+fmt(determinantRatio(dx,D)),[['y',fmt(determinantRatio(dy,D))],...rowInfo]);
  }
  break;
}
case 'geometry':
var sh=v.shape;var P=function(k){return positive(N(k),k);};var rows=[],S=0;
if(sh==='rectangle'){a=P('a');b=P('b');S=a*b;rows=[['Chu vi',fmt(2*(a+b))]];}
if(sh==='square'){a=P('a');S=a*a;rows=[['Chu vi',fmt(4*a)]];}
if(sh==='triangle'){a=P('a');h=P('h');S=a*h/2;}
if(sh==='parallelogram'){a=P('a');h=P('h');S=a*h;}
if(sh==='trapezoid'){a=P('a');b=P('b');h=P('h');S=(a+b)*h/2;}
if(sh==='rhombus'){a=P('a');h=P('h');if(h>a)throw Error('Chiều cao hình thoi không được lớn hơn cạnh.');S=a*h;rows=[['Chu vi',fmt(4*a)]];}
if(sh==='circle'){r=P('r');S=Math.PI*r*r;rows=[['Chu vi',fmt(2*Math.PI*r)]];}
output('S = '+fmt(S),rows,'Diện tích theo đơn vị².');break;
case 'solid':
var sf=v.shape;var P2=function(k){return positive(N(k),k);};var V=0,A=null;
if(sf==='cube'){a=P2('a');V=a*a*a;A=6*a*a;}
if(sf==='box'){a=P2('a');b=P2('b');h=P2('h');V=a*b*h;A=2*(a*b+a*h+b*h);}
if(sf==='cylinder'){r=P2('r');h=P2('h');V=Math.PI*r*r*h;A=2*Math.PI*r*(r+h);}
if(sf==='cone'){r=P2('r');h=P2('h');V=Math.PI*r*r*h/3;A=Math.PI*r*(r+Math.hypot(r,h));}
if(sf==='sphere'){r=P2('r');V=4*Math.PI*r*r*r/3;A=4*Math.PI*r*r;}
if(sf==='pyramid'){a=P2('a');b=P2('b');h=P2('h');V=a*b*h/3;}
output('V = '+fmt(V),A===null?[]:[['Diện tích toàn phần',fmt(A)]],'Thể tích theo đơn vị³.');break;
case 'pythag':a=positive(N('a'),'a');b=positive(N('b'),'b');if(v.mode==='ab')output('c = '+fmt(Math.hypot(a,b)),[['Công thức','c=√(a²+b²)']]);else{if(b<=a)throw Error('Cạnh huyền c phải lớn hơn a');output('b = '+fmt(Math.sqrt((b-a)*(b+a))),[['Công thức','b=√(c²−a²)']]);}break;
case 'coordinate':
var x1=N('x1'),y1=N('y1'),x2=N('x2'),y2=N('y2'),ddx=x2-x1,ddy=y2-y1;
var samePoint=ddx===0&&ddy===0;
output('AB = '+fmt(Math.hypot(ddx,ddy)),[['Trung điểm','('+fmt((x1+x2)/2)+'; '+fmt((y1+y2)/2)+')'],['Hệ số góc',ddx===0?'Không xác định':fmt(ddy/ddx)],['Phương trình đường thẳng',samePoint?'Hai điểm trùng nhau':ddx===0?'x='+fmt(x1):'y−('+fmt(y1)+')='+fmt(ddy/ddx)+'(x−('+fmt(x1)+'))']]);break;
case 'statistics':
var items=v.series.trim().split(/[;\s]+/).filter(Boolean);if(items.length<1||items.length>2000)throw Error('Cần từ 1 tới 2000 số');var nums=items.map(function(s){return numeric(s,'phần tử');}),sorted=nums.slice().sort(function(x,y){return x-y;}),length=nums.length,sum=nums.reduce(function(p,q){return p+q;},0),avg=sum/length,median=length%2?sorted[(length-1)/2]:(sorted[length/2-1]+sorted[length/2])/2,variance=nums.reduce(function(p,q){return p+(q-avg)*(q-avg);},0)/length;
output('x̄ = '+fmt(avg),[['Số phần tử',length],['Trung vị',fmt(median)],['Phương sai tổng thể',fmt(variance)],['Độ lệch chuẩn tổng thể',fmt(Math.sqrt(variance))],['Giá trị nhỏ nhất',fmt(sorted[0])],['Giá trị lớn nhất',fmt(sorted[length-1])]]);break;
case 'combination':
n=whole(N('n'),'n');var target=document.getElementById('calc-form').dataset.formula;
var k=target==='Giai thừa'?0:whole(N('k'),'k');
var p=target&&target!=='Phân phối nhị thức'?.5:N('p');if(n<0||k<0||k>n||n>250)throw Error('Yêu cầu 0 ≤ k ≤ n ≤ 250');if(p<0||p>1)throw Error('Xác suất p phải từ 0 đến 1');var co=choose(n,k);output('C(n,k) = '+co.toString(),[['n!',factorial(n).toString()],['A(n,k)',(co*factorial(k)).toString()],['P(X=k)',fmt(Number(co)*Math.pow(p,k)*Math.pow(1-p,n-k))]]);break;
case 'trig':a=N('angle');r=a*Math.PI/180;var s=Math.sin(r),cs=Math.cos(r);output('sin α = '+fmt(s),[['cos α',fmt(cs)],['tan α',Math.abs(cs)<1e-12?'Không xác định':fmt(s/cs)],['Radian',fmt(r)]]);break;
case 'logarithm':a=N('a');var x=N('x');if(a<=0||a===1||x<=0)throw Error('Điều kiện: a>0, a≠1, x>0');output('logₐx = '+fmt(Math.log(x)/Math.log(a)),[['ln x',fmt(Math.log(x))],['log₁₀x',fmt(Math.log10(x))],['aˣ',fmt(Math.pow(a,x))],['√x',fmt(Math.sqrt(x))]]);break;
case 'graph':a=N('a');b=N('b');var line=v.mode==='linear';c=line?0:N('c');output(line?'y='+fmt(a)+'x + ('+fmt(b)+')':'y='+fmt(a)+'x² + ('+fmt(b)+')x + ('+fmt(c)+')',line?[['Hệ số góc',fmt(a)]]:a===0?[['Lưu ý','Đường thẳng hoặc hàm hằng']]:[['Đỉnh I','('+fmt(-b/(2*a))+'; '+fmt(c-b*b/(4*a))+')']]);drawGraph(a,b,c,line);break;
case 'number':
n=whole(N('n'),'n');m=whole(N('m'),'m');if(n<1||m<1||n>1000000000||m>1000000000)throw Error('Chỉ nhận số nguyên dương ≤ 1.000.000.000');var factor=[],z=n;for(var j=2;j*j<=z;j+=(j===2?1:2)){if(z%j===0){var power=0;while(z%j===0){z/=j;power++;}factor.push(j+(power>1?'^'+power:''));}}if(z>1)factor.push(String(z));var gg=gcd(n,m);
output('Ước chung lớn nhất = '+fmt(gg),[['Bội chung nhỏ nhất',fmt(n/gg*m)],['Thừa số nguyên tố',n===1?'1':factor.join(' × ')],['Số chính phương?',Number.isInteger(Math.sqrt(n))?'Có':'Không']]);break;
case 'unit':var map=units[v.group];if(!map||map[v.from]===undefined||map[v.to]===undefined)throw Error('Đơn vị chưa hợp lệ');output(fmt(N('value')*map[v.from]/map[v.to])+' '+v.to,[['Đầu vào',fmt(N('value'))+' '+v.from]]);break;
case 'time':
var parse=function(s){var ma=/^(\d{1,2}):(\d{2})$/.exec(s);if(!ma||+ma[1]>23||+ma[2]>59)throw Error('Thời gian cần ở dạng HH:mm (00:00–23:59)');return +ma[1]*60+(+ma[2]);};var t1=parse(v.start),t2=parse(v.end),dt=(t2-t1+1440)%1440,hr=(t1/60%12)*30,mn=t1%60*6,ang=Math.abs(hr-mn);
output(Math.floor(dt/60)+' giờ '+dt%60+' phút',[['Tổng thời gian',dt+' phút'],['Góc nhỏ hai kim lúc bắt đầu',fmt(Math.min(ang,360-ang))+'°']]);break;
case 'heron': {
  var sides=['a','b','c'].map(function(key){return positive(N(key),'Cạnh '+key);}).sort(function(x,y){return y-x;});
  var longest=sides[0],middle=sides[1],shortest=sides[2];
  var difference=longest-middle;
  if(difference>=shortest)throw Error('Ba cạnh không tạo thành tam giác.');
  var perimeter=longest+middle+shortest;
  var area=Math.sqrt(perimeter)*Math.sqrt(shortest-difference)*Math.sqrt(shortest+difference)*Math.sqrt(longest+(middle-shortest))/4;
  if(!Number.isFinite(area))throw Error('Diện tích vượt giới hạn tính toán');
  var triangle=longest===shortest?'Tam giác đều':(longest===middle||middle===shortest)?'Tam giác cân':'Tam giác thường';
  if(Math.abs(Math.hypot(middle/longest,shortest/longest)-1)<1e-12)triangle=triangle==='Tam giác cân'?'Tam giác vuông cân':'Tam giác vuông';
  output('S = '+fmt(area),[['Chu vi',fmt(perimeter)],['Nửa chu vi',fmt(perimeter/2)],['Phân loại',triangle]]);
  break;
}
case 'frequency': {
  var lines=v.table.trim().split(/\r?\n/).filter(function(line){return line.trim();});
  if(!lines.length||lines.length>2000)throw Error('Cần từ 1 đến 2.000 dòng.');
  var counts=lines.map(function(line,index){
    var pair=line.split(';');
    if(pair.length!==2)throw Error('Dòng '+(index+1)+' cần dạng giá trị; tần số.');
    var count=whole(numeric(pair[1],'tần số'),'Tần số');
    if(count<0)throw Error('Tần số phải không âm.');
    return [numeric(pair[0],'giá trị'),count];
  });
  var total=counts.reduce(function(sum,row){return sum+row[1];},0);
  if(total<=0||!Number.isSafeInteger(total))throw Error('Tổng tần số phải dương và nằm trong giới hạn số nguyên an toàn.');
  var mean=counts.reduce(function(sum,row){return sum+row[0]*(row[1]/total);},0);
  var weightedVariance=counts.reduce(function(sum,row){return row[1]?sum+(row[0]-mean)**2*(row[1]/total):sum;},0);
  if(!Number.isFinite(weightedVariance))throw Error('Dữ liệu vượt giới hạn tính toán.');
  output('x̄ = '+fmt(mean),[['Tổng tần số',fmt(total)],['Phương sai tổng thể',fmt(weightedVariance)],['Độ lệch chuẩn',fmt(Math.sqrt(weightedVariance))]]);
  break;
}
case 'derivative': {
  a=N('a'); b=N('b'); n=whole(N('n'),'n');
  var point=N('x');
  if(n<0||n>100)throw Error('Số mũ n phải từ 0 đến 100.');
  var coefficient=n===0?0:a*n;
  var value=a===0?b:a*point**n+b;
  var slope=coefficient===0?0:coefficient*point**(n-1);
  if(![value,slope,coefficient].every(Number.isFinite))throw Error('Kết quả vượt giới hạn tính toán.');
  var derivative=coefficient===0?'0':fmt(coefficient)+(n===1?'':n===2?'x':'x^'+(n-1));
  output('f′(x₀) = '+fmt(slope),[['Đạo hàm','f′(x) = '+derivative],['f(x₀)',fmt(value)],['Điểm tiếp xúc','('+fmt(point)+'; '+fmt(value)+')']]);
  break;
}
}
}catch(e){err(e.message||'Không thể tính kết quả');}}
function drawGraph(a,b,c,linear){
  document.getElementById('plot').closest('.graphbox').hidden=false;
var canvas=document.getElementById('plot');if(!canvas)return;var ctx=canvas.getContext('2d'),w=canvas.width,h=canvas.height;
ctx.clearRect(0,0,w,h);ctx.fillStyle='#fff';ctx.fillRect(0,0,w,h);
var fun=function(x){return linear?a*x+b:a*x*x+b*x+c;},maxY=0;
for(var i=-10;i<=10;i+=.2){var value=fun(i);if(Number.isFinite(value))maxY=Math.max(maxY,Math.abs(value));}
var ymax=Math.max(8,Math.min(10000,maxY*1.12));var px=function(x){return (x+10)/20*w;},py=function(y){return h/2-y/ymax*h/2;};
ctx.strokeStyle='#edf1f8';ctx.lineWidth=1;for(var x=-10;x<=10;x+=2){ctx.beginPath();ctx.moveTo(px(x),0);ctx.lineTo(px(x),h);ctx.stroke();}
for(var yy=-4;yy<=4;yy++){var yval=yy*ymax/4;ctx.beginPath();ctx.moveTo(0,py(yval));ctx.lineTo(w,py(yval));ctx.stroke();}
ctx.strokeStyle='#a0afcb';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(px(0),0);ctx.lineTo(px(0),h);ctx.moveTo(0,py(0));ctx.lineTo(w,py(0));ctx.stroke();
ctx.font='14px sans-serif';ctx.fillStyle='#8795af';ctx.fillText('y',px(0)+10,17);ctx.fillText('x',w-18,Math.max(18,Math.min(h-10,py(0)-9)));
ctx.beginPath();ctx.strokeStyle='#5066d2';ctx.lineWidth=4;ctx.lineCap='round';var drawing=false;
for(var k=0;k<=w;k++){var gx=-10+20*k/w,gy=py(fun(gx));if(!Number.isFinite(gy)||Math.abs(gy)>h*3){drawing=false;continue;}if(!drawing){ctx.moveTo(k,gy);drawing=true;}else ctx.lineTo(k,gy);}ctx.stroke();
}
function toast(msg){var old=document.querySelector('.toast');if(old)old.remove();var d=document.createElement('div');d.className='toast';d.textContent=msg;document.body.appendChild(d);setTimeout(function(){d.remove();},2300);}
function copyText(s){if(navigator.clipboard&&navigator.clipboard.writeText)return navigator.clipboard.writeText(s);var el=document.createElement('textarea');el.value=s;el.style.position='fixed';el.style.opacity='0';document.body.appendChild(el);el.select();var ok=document.execCommand('copy');el.remove();return ok?Promise.resolve():Promise.reject(new Error('Clipboard không khả dụng'));}
var menuToggle=document.getElementById('menu-toggle');
var menuShade=document.getElementById('menu-shade');
var sidebar=document.getElementById('sidebar');
var mobile=matchMedia('(max-width: 800px)');
function setMenu(open){
  open=mobile.matches&&open;
  document.body.classList.toggle('menu-open',open);
  menuToggle.setAttribute('aria-expanded',String(open));
  menuShade.hidden=!open;
  sidebar.inert=mobile.matches&&!open;
}
function navigate(next){
  var previous={page:state.page,mode:state.mode,suite:state.suite,tool:state.tool,cat:state.cat,query:state.query};
  if(Object.keys(next).some(function(key){return previous[key]!==next[key];}))backStack.push(previous);
  Object.assign(state,next);
  search.value=state.query;
  var fromMenu=document.body.classList.contains('menu-open');
  setMenu(false);
  render();
  if(fromMenu){app.tabIndex=-1;app.focus({preventScroll:true});}
  window.scrollTo(0,0);
}
menuToggle.addEventListener('click',function(){
  setMenu(menuShade.hidden);
  if(!menuShade.hidden)sidebar.querySelector('.nav button').focus();
});
menuShade.addEventListener('click',function(){setMenu(false);menuToggle.focus();});
mobile.addEventListener('change',function(){setMenu(false);});
setMenu(false);
document.getElementById('go-back').addEventListener('click',function(){
  if(!backStack.length)return;
  Object.assign(state,backStack.pop());
  try{localStorage.setItem('gdvn-math-mode',state.mode);}catch(e){}
  search.value=state.query;
  render();
  window.scrollTo(0,0);
});
var theme=document.getElementById('theme-toggle');
function setTheme(dark){
  document.documentElement.classList.toggle('dark',dark);
  theme.setAttribute('aria-pressed',String(dark));
}
try{setTheme(localStorage.getItem('mathlab-theme')==='dark');}catch(e){}
theme.addEventListener('click',function(){
  var dark=!document.documentElement.classList.contains('dark');
  setTheme(dark);
  try{localStorage.setItem('mathlab-theme',dark?'dark':'light');}catch(e){}
});
document.addEventListener('click',function(e){
var b=e.target.closest('button');if(!b)return;
if(b.dataset.geometryGalleryFilter){geometryFilter=b.dataset.geometryGalleryFilter;geometryGallery();app.querySelector('[data-geometry-gallery-filter="'+geometryFilter+'"]').focus();return;}
if(b.dataset.geometryGalleryModel){activeGeometryModel=b.dataset.geometryGalleryModel;geometryGallery();window.scrollTo(0,0);return;}
if(b.hasAttribute('data-geometry-gallery-back')){
  var model=activeGeometryModel;
  activeGeometryModel=null;geometryGallery();app.querySelector('[data-geometry-gallery-model="'+model+'"]')?.focus();return;
}
if(b.dataset.angleModel!==undefined){angleModelIndex=Number(b.dataset.angleModel);geometryLab();app.querySelector('[data-angle-model="'+angleModelIndex+'"]').focus();return;}
if(b.dataset.mode&&b.dataset.mode!==state.mode){
  var targetPage=['formulas','favorites','tools','calculator','board'].includes(state.page)?state.page:'home';
  navigate({mode:b.dataset.mode,page:targetPage,cat:'all',query:'',tool:''});
  try{localStorage.setItem('gdvn-math-mode',state.mode);}catch(e){}
  return;
}
if(b.dataset.originalSuite){
  var suite=originalSuites.find(item=>item.base===b.dataset.originalSuite);
  navigate({page:'original-suite',suite:suite.base,mode:suite.geometry?'geometry':'number',cat:'all',query:''});
  return;
}
if(b.dataset.originalTool){navigate({page:'original',suite:b.dataset.originalTool,query:''});return;}
if(b.dataset.view){
  if(b.dataset.view==='geometry-models')activeGeometryModel=null;
  navigate({page:b.dataset.view,query:'',cat:'all',tool:b.dataset.view==='tools'?'':state.tool});return;
}
if(b.dataset.topic){navigate({page:'home',cat:b.dataset.topic,query:''});app.querySelector('.topic-detail-heading button, .topic-card')?.focus({preventScroll:true});return;}
if(b.dataset.tool){navigate({tool:b.dataset.tool,page:'tools',query:''});return;}
if(b.dataset.reset){state.cat='all';state.query='';search.value='';if(state.page==='search')state.page='home';render();return;}
if(b.dataset.fav!==undefined){
  var id=Number(b.dataset.fav),p=state.favs.indexOf(id);
  if(p===-1)state.favs.push(id);else state.favs.splice(p,1);
  try{localStorage.setItem('mathlab-favs-v1',JSON.stringify(state.favs));}catch(e){}
  if(state.page==='favorites')render();
  else{b.classList.toggle('on',p===-1);b.setAttribute('aria-pressed',String(p===-1));b.textContent=p===-1?'♥ Bỏ lưu':'♡ Lưu';}
  return;
}
if(b.dataset.copy!==undefined){var f=formulas[Number(b.dataset.copy)];copyText(f.title+'\n'+f.expr+'\n'+f.note).then(function(){toast('Đã sao chép công thức');}).catch(function(){toast('Không thể sao chép');});}
});
search.addEventListener('input',function(){
  state.query=search.value;
  if(['home','original','original-suite','calculator','geometry-lab','board'].includes(state.page)&&normalizeSearch(state.query)){state.page='search';state.cat='all';}
  else if(state.page==='search'&&!normalizeSearch(state.query))state.page='home';
  render();
});
document.addEventListener('keydown',function(e){
  if(e.key==='Escape'&&document.body.classList.contains('menu-open')){setMenu(false);menuToggle.focus();return;}
  if(((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k')||(e.key==='/'&&!document.activeElement.matches('input,textarea,select,[contenteditable]'))){
    e.preventDefault();
    setMenu(false);
    search.focus();
  }
});
render();
})();
