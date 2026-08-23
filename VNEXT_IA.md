# INFORMATION ARCHITECTURE (IA) — LONG BIEN SCOUTS DIGITAL PLATFORM VNEXT
**Ngày ban hành:** 23/08/2026  
**Định hướng:** Thiết kế theo 4 Persona cốt lõi & Hành trình Chuyển đổi (Conversion Funnel)

---

## 1. PHÂN TÍCH 4 PERSONA CỐT LÕI

### Persona 1: Phụ Huynh Mới (Ưu Tiên Số 1 — Chiếm 70% Lưu Lượng Mục Tiêu)
* **Tâm lý & Nỗi đau:** Lo con nghiện điện thoại, thiếu tự lập, nhút nhát, ít bạn bè; e ngại an toàn dã ngoại, chi phí ẩn, địa điểm xa.
* **Câu hỏi cần trả lời ngay trong 30 giây đầu:**
  1. Hướng đạo là gì? Tại sao nên chọn Hướng đạo thay vì lớp kỹ năng mềm thương mại?
  2. Con tôi (7-15 tuổi) thuộc ngành nào? Có an toàn không?
  3. Lịch sinh hoạt lúc nào? Ở đâu? (Chủ nhật, 9h-11h, Vườn hoa Bắc Biên).
  4. Có được học thử/dự thính không? Chi phí thế nào? (Hoàn toàn phi lợi nhuận, 0 học phí).
  5. Đăng ký như thế nào? (Quy trình 5 bước minh bạch + Đăng ký trực tuyến).
* **Đích đến (CTA):** Điền đơn đăng ký dự thính 2 buổi / Nhắn Zalo Huynh trưởng.

### Persona 2: Phụ Huynh & Đoàn Sinh Hiện Tại (Chiếm 15% Lưu Lượng)
* **Nhu cầu:** Xem lịch kỳ trại sắp tới, bài hát sinh hoạt, bảng chuyên hiệu, ảnh hoạt động, tài liệu sinh hoạt hàng đội.
* **Đích đến:** Tra cứu Kho Kỹ năng, Lời bài hát đất trại, Kế hoạch 4 mùa.

### Persona 3: Huynh Trưởng & Người Hướng Đạo Việt Nam / Thế Giới (Chiếm 10% Lưu Lượng)
* **Nhu cầu:** Cẩm nang Huynh trưởng, Quy chế ngành Ấu/Thiếu/Tráng, Nghi thức HĐVN, bộ công cụ Morse/Semaphore/Mật thư, kết nối liên đoàn bạn.
* **Đích đến:** Thư viện 11 tài liệu gốc, Công cụ đất trại, Cổng thông tin HDVN.

### Persona 4: Cộng Đồng, Báo Chí & Đối Tác Giáo Dục (Chiếm 5% Lưu Lượng)
* **Nhu cầu:** Lịch sử thành lập (11/03/2018), tôn chỉ mục đích, hoạt động vì cộng đồng, bảo vệ môi trường (Leave No Trace).
* **Đích đến:** Trang giới thiệu, Lời hứa & 10 Điều luật, Kênh truyền thông báo chí.

---

## 2. SƠ ĐỒ CẤU TRÚC SITE (PROPOSED SITEMAP & ROUTING)

```
[LONG BIEN SCOUTS DIGITAL PLATFORM]
├── 🏠 HOMEPAGE (/) - Cổng trải nghiệm & Funnel chuyển đổi chính
│   ├── Header (Logo, Nav Đa tầng theo Persona, Search, Language, CTA Đăng Ký)
│   ├── Hero Section ("Trải nghiệm để trưởng thành" + CTA kép)
│   ├── Quick Action Bar ("BẠN ĐANG TÌM GÌ?" - 6 nhóm định hướng nhanh)
│   ├── Thông Tin Cần Biết (Evergreen Quick Facts: Tuổi, Giờ, Địa Điểm, Chi Phí, An Toàn)
│   ├── Hoạt Động Thực Tế (Featured Activities & Dấu ấn nổi bật - 1 hàng rút gọn)
│   ├── Các Ngành Sinh Hoạt (Ấu - Thiếu - Tráng)
│   ├── Hình Ảnh / Storytelling (Photo Grid & Video cảm xúc)
│   ├── Tiếng Nói Từ Trái Tim (10 Nhật ký thực tế Phụ huynh, Trưởng, Sói, Thiếu sinh)
│   ├── Kho Kỹ Năng Hướng Đạo (Preview tương tác 10 Chuyên đề / 71 kỹ năng)
│   ├── Góc Phụ Huynh & Nuôi Dạy Con (Preview bài viết giải tỏa nỗi lo cha mẹ)
│   ├── Thư Viện Tài Liệu Chính Thống (Preview 11 sách cẩm nang HĐVN)
│   ├── Quy Trình 5 Bước Gia Nhập & Một Buổi Sáng Của Con
│   ├── Lịch Kỳ Trại Dự Kiến (4 Mùa trải nghiệm)
│   ├── FAQ Phụ Huynh Hỏi - Huynh Trưởng Trả Lời
│   └── Footer & Bản Đồ Tương Tác
│
├── 🧭 KNOWLEDGE HUB (/ky-nang) - Hệ thống Tra Cứu Kỹ Năng Toàn Diện
│   ├── Chuyên đề 01: Dã Ngoại & Lều Trại (Camping & Pioneering)
│   ├── Chuyên đề 02: Scoutcraft & Nút Dây Thực Hành
│   ├── Chuyên đề 03: Lửa, Bếp & Kỹ Năng Mưu Sinh (Firecraft & Outdoor Cooking)
│   ├── Chuyên đề 04: Khám Phá & Định Hướng (Navigation & Compass)
│   ├── Chuyên đề 05: Sơ Cấp Cứu & An Toàn Thân Thể (First Aid & Safety)
│   ├── Chuyên đề 06: Thiên Nhiên & Môi Trường (Nature & Leave No Trace)
│   ├── Chuyên đề 07: Truyền Tin & Trò Chơi Lớn (Signaling, Morse, Semaphore)
│   ├── Chuyên đề 08: Kỹ Năng Lãnh Đạo & Hàng Đội (Leadership & Patrol System)
│   ├── Chuyên đề 09: Hệ Thống Chuyên Hiệu Rèn Luyện (Merit Badges)
│   └── Chuyên đề 10: Huấn Luyện Huynh Trưởng (Scoutmaster Resources)
│
├── ❤️ GÓC PHỤ HUYNH (/cha-me) - Cẩm Nang Giáo Dục & Nuôi Con Trưởng Thành
│   ├── Trụ cột 1: Rèn luyện tính tự lập & Tự chăm sóc bản thân
│   ├── Trụ cột 2: Giúp con tự tin, hòa đồng & Làm việc nhóm hiệu quả
│   ├── Trụ cột 3: Giải phóng năng lượng & Cai nghiện thiết bị số (Digital Detox)
│   ├── Trụ cột 4: Kỷ luật tích cực & Phương pháp giáo dục không quát mắng
│   └── Trụ cột 5: Hướng dẫn đồng hành cùng con tại đất trại
│
├── 🔍 INSTANT SITE SEARCH SYSTEM (Toàn trang)
│   └── Index dữ liệu tích hợp: Kỹ năng, Tài liệu, FAQ, Ngành, Độ tuổi, Địa điểm, Từ khóa tìm kiếm tự nhiên.
│
└── 📄 SYSTEM PAGES
    ├── 404.html (Trang lỗi thân thiện phong cách Hướng đạo: "Lạc đường trong rừng")
    ├── robots.txt (Hướng dẫn Spider Google / Bing index đúng chuẩn)
    └── sitemap.xml (Sơ đồ XML động chuẩn Google Search Console)
```

---

## 3. THIẾT KẾ ĐIỀU HƯỚNG (NAVIGATION ARCHITECTURE)

### A. Desktop Navigation Header (Đa Tầng & Rõ Ràng)
1. **Logo & Slogan:** Biểu tượng Hoa Bách Hợp + Cầu Long Biên.
2. **Cho Con Tham Gia (Dropdown):**
   * Tổng quan & Lợi ích Hướng đạo
   * Ngành Ấu (7–11t) · Ngành Thiếu (11–15t) · Ngành Tráng (18+t)
   * Quy trình 5 bước gia nhập & Học thử
   * Hỏi đáp phụ huynh (FAQ)
3. **Kỹ Năng Hướng Đạo (Mega Dropdown 10 Chuyên Đề):**
   * Lều trại, Nút dây, Lửa bếp, La bàn bản đồ, Sơ cứu, Morse/Semaphore, Chuyên hiệu...
4. **Góc Phụ Huynh:**
   * Nuôi dạy con tự lập, cai nghiện màn hình, trải nghiệm thực tế.
5. **Thư Viện & Tiện Ích:**
   * Sách tài liệu HĐVN, Kho bài hát sinh hoạt, Bộ giải mã đất trại.
6. **Công Cụ Search (Icon Kính Lúp 🔍):** Mở thanh Instant Search toàn trang (Phím tắt `Ctrl + K` hoặc `⌘ + K`).
7. **Nút Chuyển Ngữ (VN | EN):** Chuyển đổi ngôn ngữ tức thì.
8. **CTA Button (Primary):** *"📝 Đăng Ký Cho Con"*.

### B. Mobile Navigation (Thumb Zone & Ergonomic Architecture)
1. **Top Bar:** Logo + Nút Search 🔍 + Nút Ngôn ngữ + Nút Hamburger Menu ☰.
2. **Slide-in Drawer Menu:** Phân nhóm theo 4 Persona (Gia nhập, Các ngành, Kỹ năng, Cha mẹ, Tài liệu, Hotline).
3. **Sticky Bottom Action Bar (Cố định góc dưới cho ngón cái):**
   * 📝 **Đăng Ký** (Nút nổi bật nhất)
   * 💬 **Zalo Trưởng** (Tư vấn nhanh)
   * 📍 **Chỉ Đường** (Vườn hoa Bắc Biên Google Maps)
   * 📞 **Gọi Ngay** (Hotline Huynh trưởng)

---

## 4. MÔ HÌNH DỮ LIỆU CHUẨN HÓA (UNIFIED CONTENT MODEL)

Mọi bài viết / kỹ năng / tài liệu được chuẩn hóa theo Schema Object:
```javascript
{
  id: "nut-ghe-don-bowline",
  slug: "nut-ghe-don-bowline",
  title: "Nút Ghế Đơn (Bowline Knot)",
  category: "cat-scoutcraft", // Chuyên đề
  subcategory: "Nút Dây Cứu Nạn",
  audience: ["thieu", "trang", "huynhtruong"], // Đối tượng phù hợp
  ageRange: "11-18+",
  readTime: "3 phút thực hành",
  poster: "image/kynang/kynang-nut-ghe-don-bowline.png",
  summary: "Được mệnh danh là 'Vua của các loại nút dây'...",
  content: "...",
  levels: { "Đẳng 3": "...", "Đẳng 2": "...", "Đẳng 1": "..." },
  assessment: ["Tiêu chí 1", "Tiêu chí 2"],
  relatedSkills: ["nut-thuyen-chuyen", "nut-det"],
  seo: {
    metaTitle: "Hướng Dẫn Thắt Nút Ghế Đơn Bowline Chuẩn Hướng Đạo | Long Biên Scouts",
    metaDesc: "Học cách thắt nút ghế đơn (Bowline Knot) - nút dây cứu thương, cứu hộ kinh điển...",
    keywords: ["nút ghế đơn", "bowline knot", "kỹ năng nút dây", "cứu nạn hướng đạo"]
  }
}
```
Mô hình này giúp **Instant Search** có thể quét siêu tốc qua Memory Index chỉ trong < 5ms mà không cần phụ thuộc backend nặng nề.
