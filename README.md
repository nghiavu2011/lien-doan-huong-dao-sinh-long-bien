# Website Liên đoàn Hướng đạo Long Biên

Trang giới thiệu công khai + bảng điều khiển dành riêng cho Ban Huynh trưởng. Site tĩnh, không cần build.

```
index.html               trang công khai (186 KB, logo + đồ họa cầu nhúng sẵn)
admin.html               bảng điều khiển: lượt xem, ảnh & album, xuất dữ liệu
supabase-schema.sql      lược đồ cơ sở dữ liệu — dán vào Supabase là chạy
data/albums.json         danh sách album ảnh (54 ảnh, 5 album)
assets/gallery/          108 tệp: mỗi ảnh có bản 1400px và bản thu nhỏ 640px
assets/hero/             ảnh nền Hero và nền mục Kết nạp, đã làm trầm sẵn
assets/logo-*, bridge-*  logo trong suốt và đồ họa cầu Long Biên bản rời
```

---

## ⚠️ Việc cần làm trước tiên — fanpage đã mất quyền quản lý

Ngày 13/08/2026, `facebook.com/longbienscoutshanoi` đang là:

| Trước | Hiện tại |
|---|---|
| Liên đoàn Hướng đạo Long Biên | **"Deutschland Ein"** |
| Logo Liên đoàn | **Logo báo BILD (Đức)** |
| Long Biên, Hà Nội | **Munich, Germany** |

Bài viết cũ của Liên đoàn vẫn còn, nhưng danh tính trang đã bị thay và trang đang đăng Reels nội dung nước ngoài. Trong bình luận có người hỏi cách lấy lại quyền admin từ khoảng 23 tuần trước.

**Website này không nhúng và không dẫn link tới fanpage đó.** Dẫn phụ huynh tới một trang đã bị chiếm quyền là rủi ro thật.

Việc cần làm: báo cáo Facebook (Hacked account & Impersonation, nên để Liên đoàn trưởng đứng tên) → lập fanpage mới và ghim bài thông báo trang cũ không còn thuộc Liên đoàn → khi có URL mới, sửa **một dòng** `facebookUrl` trong `CONFIG` là mọi link Facebook trên web tự hiện lại.

---

## Cấu hình — khối `CONFIG` ở đầu thẻ `<script>` cuối `index.html`

| Khoá | Trạng thái | Ghi chú |
|---|---|---|
| `formUrl` | ✅ đang dùng | Google Form, lấy từ bài `#ketnapthanhvienmoi`. **Kiểm tra form còn mở nhận không.** |
| `youtubeUrl` | ✅ đang dùng | `youtube.com/@longbienscouts` |
| `facebookUrl` | ⛔ `null` | Xem cảnh báo trên. Để `null` thì link tự ẩn. |
| `heroPhoto` / `ctaPhoto` | ✅ | Ảnh nền. Đổi được sang URL bất kỳ khi deploy; để `null` thì về nền gradient đơn sắc. |
| `supabaseUrl` / `supabaseAnonKey` | ⬜ trống | Điền để bật thống kê lượt xem + lưu ảnh trực tiếp. Xem mục dưới. |
| `trackViews` | `true` | `false` = tắt hẳn việc ghi nhận lượt xem. |

Đổi ảnh nền thì **nên làm trầm ảnh sẵn trước khi upload**, đừng chỉ hạ `opacity` bằng CSS — hạ opacity làm ảnh bạc màu mà chữ vẫn khó đọc. Công thức đang dùng: brightness ×0,42 · saturation ×0,74 · contrast ×1,05.

---

## Bảng điều khiển (`admin.html`)

Mở trực tiếp `admin.html` trên site đã deploy. Trang có `noindex` nên Google không đánh chỉ mục.

### Thẻ "Lượt xem"
Bốn chỉ số (lượt xem, phiên truy cập, hôm nay, tỉ lệ dùng điện thoại), biểu đồ cột theo ngày, và bốn bảng xếp hạng: **người xem đến từ đâu** (gộp Facebook / YouTube / Google / Zalo / vào trực tiếp, ưu tiên `utm_source` nếu link có gắn), **khu vực**, **thiết bị**, **mục được mở nhiều** (theo neo `#` trong đường dẫn). Chọn kỳ 7 / 30 / 90 ngày. Xuất được CSV.

Nói thẳng về giới hạn: **khu vực suy ra từ múi giờ trên máy người xem, không phải từ địa chỉ IP** — nên nó chỉ là ước lượng và không phân biệt được tỉnh thành trong nước. Đây là lựa chọn có ý thức: tra IP nghĩa là phải thu thập và xử lý IP, mà trang này có ảnh trẻ em nên tôi chọn phương án nhẹ tay hơn. Nếu cần địa lý chính xác, cách gọn nhất là bật **Vercel Web Analytics** khi deploy trên Vercel (một dòng script, có sẵn quốc gia/thành phố) và dùng song song.

### Thẻ "Ảnh & album"
Kéo ảnh vào khung là xong. Ảnh được **nén ngay trên máy bạn** bằng canvas: bản lớn cạnh dài 1400px chất lượng 0,76 và bản thu nhỏ 640px chất lượng 0,70, đều là WebP — không cần cài Photoshop hay công cụ nào. Tệp tự đặt tên theo mã album (`a3-09`, `a3-10`…), không ghi đè ảnh cũ.

Với mỗi album: sửa tên, nhãn nút lọc, thời gian, mô tả, mã album; đổi thứ tự; xoá. Với mỗi ảnh: đổi thứ tự, xoá, và nhập chú thích riêng — chú thích này hiện khi người xem mở ảnh cỡ lớn, đồng thời làm `alt` cho ảnh (tốt cho SEO và cho người dùng trình đọc màn hình). Ảnh nào mất tệp sẽ được viền đỏ để dễ thấy.

### Thẻ "Xuất & hướng dẫn"
Tải `albums.json`, tải gói `.zip` chứa ảnh mới thêm trong phiên, tải CSV số liệu, và toàn bộ các bước bật Supabase.

### Hai chế độ chạy
- **Chưa nối Supabase → chế độ ngoại tuyến.** Vẫn sắp xếp được album, sửa chú thích, nén ảnh mới; xong thì tải `albums.json` + gói `.zip` về commit vào repo. Thẻ "Lượt xem" tự ẩn vì không có nguồn số liệu.
- **Đã nối Supabase.** Đăng nhập bằng tài khoản Ban Huynh trưởng. Bấm "Lưu & xuất bản" là website đổi ngay, không cần deploy lại; ảnh mới lên thẳng Storage.

Trang công khai nạp album theo thứ tự: **Supabase → `data/albums.json` → danh sách mặc định nhúng trong HTML.** Nghĩa là dù Supabase sập hay chưa cấu hình, gallery vẫn hiện đủ.

### Bật Supabase (khoảng 10 phút)
1. Tạo project miễn phí trên supabase.com.
2. **SQL Editor** → dán toàn bộ `supabase-schema.sql` → Run. (Chạy lại nhiều lần không lỗi.)
3. **Storage** → kiểm tra bucket `gallery` đã Public. *(Script tự tạo, bước này chỉ để đối chiếu.)*
4. **Authentication → Users** → thêm email/mật khẩu cho Ban Huynh trưởng.
5. **Settings → API** → copy *Project URL* và khoá *anon public*.
6. Dán hai giá trị đó vào `CONFIG` trong `index.html` **và** vào biến `SB` ở đầu thẻ script trong `admin.html`.

Về chuyện an toàn: đặt khoá *anon public* trong file HTML là bình thường và không sao. Khoá đó chỉ cho phép **ghi thêm một dòng lượt xem** và **đọc danh sách album**. Mọi việc đọc số liệu, sửa album, upload ảnh đều bắt buộc đăng nhập. Ràng buộc này nằm ở phía Supabase (Row Level Security trong file SQL), không phải ở JavaScript trong trình duyệt — nên không lách được bằng cách mở DevTools. Đây cũng là lý do tôi **không** làm kiểu "nhập mật khẩu ghi trong file HTML": cách đó chỉ là trang trí, ai xem source cũng thấy.

Script SQL còn có trigger chặn ghi rác (một phiên tối đa 200 dòng/giờ, cắt ngắn mọi chuỗi đầu vào) và hàm `don_so_lieu_cu()` để xoá số liệu quá 400 ngày.

---

## Quyền riêng tư

Trang chỉ ghi: đường dẫn, tên miền dẫn tới (không ghi URL đầy đủ), múi giờ, ngôn ngữ, loại thiết bị, chiều rộng màn hình, và một mã phiên ngẫu nhiên mất hiệu lực khi đóng tab. **Không lưu địa chỉ IP, không cookie theo dõi**, và tôn trọng cờ Do Not Track của trình duyệt.

Còn 54 ảnh thì đều thấy rõ mặt các con. Đây là ảnh do chính Liên đoàn đăng công khai, nhưng đưa lên một website riêng là phạm vi sử dụng khác. Theo Nghị định 13/2023/NĐ-CP, dữ liệu cá nhân của trẻ dưới 16 tuổi cần sự đồng ý của cha mẹ hoặc người giám hộ. Đề xuất: Ban Huynh trưởng gửi thông báo tới phụ huynh và mở một kênh để phụ huynh yêu cầu gỡ ảnh con mình — chân trang đã có sẵn câu mời phụ huynh làm việc đó. Cần thì tôi làm phiên bản làm mờ mặt cho các ảnh chụp gần.

---

## Nội dung trên trang lấy từ đâu

Không có thông tin nào tôi tự suy diễn. Toàn bộ chữ biên tập lại từ bài đăng thật:

- **Bài "Giới thiệu sơ lược"** → mục "Về Liên đoàn", "Các ngành", dòng thời gian: thành lập 11/3/2018, phi lợi nhuận, nền tảng Hướng đạo Việt Nam, Ban Huynh trưởng (Liên đoàn trưởng, Thiếu trưởng, Thiếu phó, Akela, Bagheera, Baloo, Kaa + phụ tá), cơ cấu Tráng/Thiếu/Ấu, Hải ly lên Sói từ 24/01/2021, sinh hoạt sáng Chủ nhật ở vườn hoa Bắc Biên, duy trì online thời dịch, kỳ trại đầu tiên Sơn Tinh Camp 2018.
- **Bài `#ketnapthanhvienmoi`** → mục "Kết nạp thành viên": Ấu đoàn 10 em sinh 2016–2017, Thiếu đoàn 10 em sinh 2012–2013, 4 tiêu chí, link Google Form.
- **Bảy bài có ngày cụ thể** → mục "Liên đoàn đã làm gì": trại 825 Sói Con Tự Lập (23–24/8/2025, Thiên Phú Lâm – Sóc Sơn), thám du "Chuyến tàu ngược dòng thời gian" (25/8/2025, cùng Thiếu đoàn Hai Bà Trưng), An toàn mạng (17/8/2025), sinh hoạt Ấu đoàn gói bánh Trung thu (28/9/2025), "Không một mình" (15/10/2025), trại Hà Nội Mùa Thu – 36 Phố Phường (6–7/12/2025), thư cảm ơn gom sách gửi Trường Tiểu học Hoàng Hoa Thám (Krông Búk, Đắk Lắk).
- **Ban Huynh trưởng**: Liên đoàn trưởng **Nguyễn Phương Thảo**. Các chức danh còn lại vẫn để dạng chức danh và tên rừng vì chưa có tên thật.

**Còn thiếu:** số điện thoại / Zalo / email liên hệ, và tên thật của Thiếu trưởng, Thiếu phó, các trưởng ngành Ấu. Gửi là tôi ghép vào.

**Một chỗ cần đối chiếu:** album "Yêu thương lan tỏa" tôi không lấy được caption bài gốc, nên mô tả viết theo đúng những gì thấy trong ảnh (đoàn sinh tự chuẩn bị, đóng gói và đứng bán để gây quỹ). Trên web tôi đặt tên album là "Các em gây quỹ cho việc giúp ích" — nếu bài gốc nói khác, anh sửa lại trong `admin.html`.

---

## Ghi chú về câu chữ

Bản này đã viết lại toàn bộ theo hướng bỏ giọng quảng cáo:

- **Bỏ những cụm sáo và những cụm hay gặp ở văn AI**: "mỗi hoạt động là một bài học không nằm trong sách", "lớn lên theo đúng nhịp của từng lứa tuổi", "không cần đi thật xa để trưởng thành", "khám phá thiên nhiên • rèn luyện bản thân • sống tử tế", "hành trình", "lan tỏa", "vô cùng ý nghĩa", và lối "không chỉ… mà còn".
- **Thay bằng chi tiết cụ thể.** Tiêu đề mục ảnh đổi từ "Hình ảnh thật từ các buổi sinh hoạt và kỳ trại" thành "Ảnh của chính các em, không phải ảnh mẫu"; dải giữa trang đổi từ "Từ chân cầu Long Biên, những chuyến đi nhỏ bắt đầu" thành "Bắc Biên nằm ngay dưới chân cầu Long Biên" kèm mô tả thật về bãi cỏ ven sông — đồng thời đây cũng là lý do duy nhất để giữ đồ họa cầu ở đúng mục này.
- **Giữ nguyên chữ của Liên đoàn ở những chỗ quan trọng**: câu "Là một hướng đạo sinh, các em sẽ trở thành người có ích, trọng danh dự, sống trách nhiệm và có tình yêu thương" để nguyên dạng trích dẫn; bốn đức tính "sức khỏe · kỷ luật · can đảm, cương quyết · tháo vát, khéo tay" lấy đúng từ bài giới thiệu.
- **Kể bằng chi tiết có trong bài gốc** thay vì bằng tính từ: vườn Bách Thảo đóng cửa sớm từ 8h nên Ban Huynh trưởng đổi hướng; các em thút thít lúc ra khỏi rạp phim "Mưa Đỏ"; bạn nào làm được bánh thì reo lên "mình làm được rồi!".
- **Không nêu tên các con.** Bài gốc có tên rừng của mấy em nhỏ; trên web tôi viết "mấy Hải ly nhỏ trong Liên đoàn".
- **Câu trả lời FAQ nói thẳng**, kể cả những chỗ dễ né: có phải đóng học phí, phụ huynh có phải ở lại giúp không.

---

## Deploy

Site tĩnh, không cần build. Kéo cả thư mục vào Netlify Drop, hoặc push lên GitHub rồi nối Vercel / Cloudflare Pages / GitHub Pages.

Sau khi có domain, sửa `og:image` trong `<head>` thành URL tuyệt đối để ảnh preview hiện đúng khi chia sẻ link.

---

## Lịch sử sửa lỗi

**Lần 2 — ảnh không hiển thị.** Hai lỗi thật, không phải do thiếu thư mục:
1. `IntersectionObserver` đặt `threshold: .1`. Khối grid 54 ảnh cao ~3.800px, nên điều kiện "10% chiều cao khối nằm trong viewport" không bao giờ đạt được với khối cao hơn viewport → khối nằm mãi ở `opacity: 0`. Đã đổi sang `threshold: 0` + `rootMargin`, thêm fallback khi trình duyệt không hỗ trợ, và thêm hàm `sweep()` chạy kèm `scroll` / `load` / timeout 900ms để vét những khối mà observer bỏ sót lúc cuộn nhanh.
2. Ô ảnh là `<button>` đặt trong container `columns: 4`. Trình duyệt không fragment được `<button>` vào các cột nên ô sập chiều cao 0. Đã đổi sang CSS Grid, ô tỉ lệ 4/3 + `object-fit: cover`.

Đã thêm lớp bảo hiểm: ảnh nào lỗi tải thì một khung cảnh báo cam hiện ngay trên grid. Từ đó **trang trống = lỗi code, khung cam = thiếu file**.

**Lần 3 — tiết chế đồ họa cầu.** Từ 6 chỗ xuống còn đúng 1 chỗ (mục "Sân sinh hoạt"), xoá cả markup lẫn CSS không còn dùng. Hero và mục Kết nạp chuyển sang ảnh hoạt động làm trầm; manifesto, Ban Huynh trưởng và chân trang chuyển sang gradient đơn sắc. Ẩn logo badge ở hero dưới 680px vì nó chồng lên dòng eyebrow bị wrap.

**Lần 4 — số đếm album hiện `undefined`.** Nút lọc đọc `a.n` (dạng gọn cũ) trong khi `albums.json` dùng mảng `photos`. Đã thay bằng hàm `countOf()` xử lý cả hai dạng.

### Đã kiểm chứng bằng Chromium headless
Render thật qua HTTP ở 390 / 768 / 1440 / 1920px: 0 lỗi JS; 54/54 ô ảnh đúng chiều cao; nạp `data/albums.json` thành công và số đếm nút lọc đúng (54 · 6 · 4 · 8 · 5 · 31); lọc album trả về đúng số ảnh; lightbox mở đúng ảnh, caption và số đếm `1 / 54`; cuộn hết trang không còn phần tử `.reveal` bị kẹt; đồ họa cầu đếm được đúng 1 lần. `admin.html`: chế độ ngoại tuyến hiện đủ 54 thumbnail không tệp nào lỗi, thêm/đổi thứ tự/xoá album và ảnh hoạt động đúng, ô chú thích ghi vào state, bộ ghi ZIP và bộ nén WebP bằng canvas đều chạy.
