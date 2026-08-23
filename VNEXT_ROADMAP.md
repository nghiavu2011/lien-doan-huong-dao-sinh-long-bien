# ROADMAP TRIỂN KHAI & TIÊU CHÍ ĐỊNH LƯỢNG — LONG BIEN SCOUTS VNEXT
**Ngày ban hành:** 23/08/2026  
**Chiến lược:** Chia nhỏ theo 10 Milestones độc lập — Kiểm thử nghiêm ngặt sau từng bước.

---

## 1. KẾ HOẠCH CHI TIẾT 10 MILESTONES

### MILESTONE 0: Audit Toàn Diện & Thiết Kế Kiến Trúc (ĐÃ HOÀN THÀNH)
* **Kết quả bàn giao:**
  * ✅ `VNEXT_AUDIT.md`: Báo cáo hiện trạng kỹ thuật, assets, SEO, UX.
  * ✅ `VNEXT_IA.md`: Kiến trúc thông tin phân tầng theo 4 Persona.
  * ✅ `VNEXT_ROADMAP.md`: Lộ trình 10 bước và tiêu chuẩn định lượng.

---

### MILESTONE 1: Nâng Cấp Navigation + Header Hierarchy + "Bạn Đang Tìm Gì?" Quick Access
* **Nhiệm vụ:**
  * Cấu trúc lại Header Menu phân nhóm rõ ràng theo 4 Persona (Gia nhập, Kỹ năng, Phụ huynh, Thư viện).
  * Tích hợp thanh Quick Access Bar 6 nút *"Bạn Đang Tìm Gì?"* ngay dưới Hero Section:
    1. 📝 *Cho con tham gia* (Cuộn mượt đến Quy trình 5 bước & Đơn đăng ký)
    2. 📅 *Lịch & Địa điểm* (Chủ nhật 9h–11h tại Vườn hoa Bắc Biên)
    3. 🐺 *Các ngành Ấu / Thiếu / Tráng* (Khám phá độ tuổi phù hợp)
    4. 🏕️ *Kỹ năng Hướng đạo* (Kho 10 chuyên đề 71 kỹ năng)
    5. ❤️ *Góc Phụ huynh* (Tâm lý, cai nghiện màn hình, nuôi con tự lập)
    6. 📚 *Thư viện & Công cụ* (Sách HĐVN, bài hát & bộ giải mã)
  * Khối *“Thông Tin Cần Biết”* (Evergreen Quick Facts) không bị trôi theo thời gian.
* **Tiêu chuẩn kiểm thử:**
  * 0 broken links, click cuộn mượt mà chính xác vị trí (offset header 70px).
  * Desktop & Mobile đồng bộ dữ liệu điều hướng.

---

### MILESTONE 2: Tối Ưu Hóa Trải Nghiệm Mobile-First UX
* **Nhiệm vụ:**
  * Nâng cấp Mobile Drawer Menu mượt mà với hiệu ứng trượt nhẹ nhàng, dễ đóng mở.
  * Tối ưu Sticky Bottom Bar cho ngón cái (Thumb Zone) với Touch Target chuẩn ≥ 44px × 44px.
  * Kiểm thử hiển thị không bị lỗi trên các màn hình hẹp 320px (iPhone SE cũ) đến 430px (iPhone Pro Max).
* **Tiêu chuẩn kiểm thử:**
  * 0 horizontal scroll trên toàn bộ 8 breakpoints (320px, 360px, 390px, 430px, 768px, 1024px, 1280px, 1440px).

---

### MILESTONE 3: Xây Dựng Hệ Thống Instant Site Search Toàn Trang
* **Nhiệm vụ:**
  * Xây dựng bộ máy tìm kiếm Client-side In-memory Search siêu tốc (< 5ms) không phụ thuộc backend.
  * Hỗ trợ tìm kiếm theo:
    * **Tên kỹ năng:** Gõ *"nút ghế"* -> Trả về Nút Ghế Đơn (Bowline).
    * **Độ tuổi / Ngành:** Gõ *"9 tuổi"* / *"Sói con"* -> Trả về Ngành Ấu.
    * **Chủ đề phụ huynh / Thắc mắc:** Gõ *"học phí"* / *"chi phí"* -> Trả về FAQ Chi Phí (Phi lợi nhuận 0 đồng). Gõ *"dự thính"* -> Trả về Quy trình 2 buổi trải nghiệm. Gõ *"chủ nhật"* -> Trả về Lịch sinh hoạt 9h-11h Bắc Biên.
  * Giao diện tìm kiếm: Modal Popup phím tắt `Ctrl + K` / `⌘ + K` trên máy tính và nút 🔍 nổi bật trên điện thoại, hỗ trợ highlight từ khóa, autocomplete và empty state thân thiện.
* **Tiêu chuẩn kiểm thử:**
  * Pass 100% các truy vấn thử nghiệm bắt buộc: `9 tuổi`, `học phí`, `nút ghế`, `chủ nhật`, `dự thính`.

---

### MILESTONE 4: Kiến Trúc Knowledge Hub — Kỹ Năng Hướng Đạo
* **Nhiệm vụ:**
  * Tinh chỉnh khối Kỹ Năng Hướng Đạo trên Homepage thành cổng Preview thông minh với CTA *"Khám phá toàn bộ 71 kỹ năng ↗"*.
  * Tích hợp bộ lọc đa tầng theo Ngành (Ấu / Thiếu / Tráng) và Cấp độ rèn luyện (Đẳng 3, Đẳng 2, Đẳng 1, Hạng Nhất).
* **Tiêu chuẩn kiểm thử:**
  * 100% 71 kỹ năng mở modal tương tác đầy đủ hình ảnh, tiêu chuẩn chấm điểm và hướng dẫn thực hành.

---

### MILESTONE 5: Thiết Kế Hub "Góc Phụ Huynh & Nuôi Con Trưởng Thành"
* **Nhiệm vụ:**
  * Xây dựng Hub chuyên sâu giải quyết 5 nỗi trăn trở lớn nhất của cha mẹ hiện đại:
    1. *Làm sao giúp con rèn tính tự lập từ việc nhỏ nhất?*
    2. *Con nhút nhát, sợ đám đông: Hướng đạo giúp con tự tin thế nào?*
    3. *Cai nghiện màn hình điện thoại & Đưa con về với thiên nhiên (Digital Detox).*
    4. *Phương pháp kỷ luật tích cực và nghệ thuật giao tiếp không quát mắng.*
    5. *Trải nghiệm đồng hành cùng con của phụ huynh tại đất trại Bắc Biên.*
  * Mỗi bài viết kết nối tự nhiên: Vấn đề cha mẹ -> Phương pháp giáo dục Hướng đạo -> Hoạt động thực tế tại Long Biên -> Nút Đăng ký dự thính.
* **Tiêu chuẩn kiểm thử:**
  * Bài viết có chiều sâu giáo dục, ngôn từ nhân ái, ấm áp, không keyword stuffing.

---

### MILESTONE 6: Triển Khai Technical SEO, Local SEO & Structured Data Toàn Diện
* **Nhiệm vụ:**
  * Tạo `robots.txt` chuẩn SEO cho phép thu thập dữ liệu toàn bộ trang.
  * Tạo `sitemap.xml` hợp lệ khai báo đầy đủ các URL, độ ưu tiên (priority 1.0) và tần suất cập nhật.
  * Nhúng Structured Data JSON-LD nâng cao:
    * `EducationalOrganization` (Thông tin tổ chức Hướng đạo Long Biên, địa chỉ Bắc Biên, Hotline, mạng xã hội).
    * `FAQPage` (Khai báo các câu hỏi thường gặp của phụ huynh để hiển thị Rich Snippets thả xuống trên Google).
    * `BreadcrumbList` (Định vị phân cấp trang).
* **Tiêu chuẩn kiểm thử:**
  * Rich Results Test của Google đạt 0 lỗi, 0 cảnh báo. `robots.txt` và `sitemap.xml` trả HTTP 200 OK.

---

### MILESTONE 7: Tối Ưu Hiệu Năng & Khả Năng Dự Phòng Gallery
* **Nhiệm vụ:**
  * Tối ưu hóa tải ảnh LCP / Preload cho Hero Banner.
  * Tích hợp cơ chế Graceful Fallback cho ảnh: Nếu ảnh album tải chậm hoặc lỗi mạng, tự động hiển thị placeholder đẹp mắt, tuyệt đối không lộ thông báo kỹ thuật ra giao diện.
* **Tiêu chuẩn kiểm thử:**
  * LCP ≤ 2.5s, CLS ≤ 0.1, 0 layout shift khi nạp ảnh.

---

### MILESTONE 8: Đồng Bộ Đa Ngôn Ngữ (VN / EN) Tuyệt Đối
* **Nhiệm vụ:**
  * Rà soát toàn bộ các text UI, nút bấm, modal, thông điệp tìm kiếm và FAQ.
  * Đảm bảo khi chọn tiếng Việt (VN): 100% nội dung hiển thị tiếng Việt tự nhiên.
  * Đảm bảo khi chọn tiếng Anh (EN): 100% nội dung chuyển ngữ mạch lạc, không sót chuỗi ký tự tiếng Việt.
* **Tiêu chuẩn kiểm thử:**
  * Chuyển đổi ngôn ngữ tức thì, lưu trạng thái trong `localStorage`, không làm tải lại trang hay mất dữ liệu đang điền.

---

### MILESTONE 9: Khả Năng Tiếp Cận (Accessibility) & Sẵn Sàng Analytics
* **Nhiệm vụ:**
  * Đảm bảo mọi nút bấm, form, modal đều có thể điều hướng hoàn toàn bằng bàn phím (Tab, Enter, Escape).
  * Khai báo đầy đủ `aria-label`, `aria-expanded`, `role="search"`, `role="navigation"`.
  * Hỗ trợ chuẩn `prefers-reduced-motion: reduce` (Tự động tắt chuyển động mạnh đối với người dùng nhạy cảm).
  * Chuẩn bị sẵn Event Abstraction Layer (đo lường lượt click Đăng ký, Zalo, Tìm kiếm, Tải tài liệu mà không cài tracking bên thứ ba trái phép).
* **Tiêu chuẩn kiểm thử:**
  * Axe Accessibility: 0 lỗi Critical/Serious. Điểm Accessibility Lighthouse ≥ 95.

---

### MILESTONE 10: Kiểm Thử Đa Thiết Bị, Dọn Dẹp & Phát Hành Production
* **Nhiệm vụ:**
  * Kiểm thử hồi quy toàn diện trên Chrome, Edge, Safari, iOS Safari, Android Chrome.
  * Chạy bộ kiểm thử tự động `master_bug_audit.py` & `deep_potential_bug_audit.py`.
  * Đóng gói, đẩy Git commit và deploy lên Vercel Production URL chính thức.
* **Tiêu chuẩn kiểm thử:**
  * 0 console error, 0 broken links, 100% DoD đạt chuẩn.

---

## 2. TIÊU CHÍ ĐỊNH LƯỢNG NGHIÊM NGẶT (QUANTITATIVE GATES)

| Hạng mục đo lường | Ngưỡng Mục Tiêu (Target) | Ngưỡng Tối Thiểu Phát Hành (Release Gate) |
|---|---|---|
| **Lighthouse Performance (Mobile)** | **≥ 90** | **≥ 85** |
| **Lighthouse Accessibility** | **≥ 98** | **≥ 95** |
| **Lighthouse Best Practices** | **≥ 98** | **≥ 95** |
| **Lighthouse SEO** | **100** | **≥ 95** |
| **Largest Contentful Paint (LCP)** | **≤ 2.0s** | **≤ 2.5s** |
| **Cumulative Layout Shift (CLS)** | **≤ 0.05** | **≤ 0.1** |
| **Interaction to Next Paint (INP)** | **≤ 100ms** | **≤ 200ms** |
| **Broken Internal Links** | **0%** | **0% (Tuyệt đối không có link hỏng)** |
| **Console Errors** | **0** | **0** |
| **Axe Accessibility Critical Errors** | **0** | **0** |
| **Responsive Breakpoints Pass** | **8 / 8 viewports** | **8 / 8 viewports** |

---

## 3. DEFINITION OF DONE (ĐỊNH NGHĨA HOÀN THÀNH)

Website chỉ được coi là hoàn thành vNext khi và chỉ khi:
1. Bản sắc thương hiệu Long Biên và toàn bộ 100% hình ảnh thực tế, câu chuyện cảm xúc được bảo toàn nguyên vẹn.
2. Phụ huynh mới tìm thấy câu trả lời cho mọi băn khoăn chỉ trong 30 giây đầu tiên.
3. Bộ tìm kiếm Instant Site Search hoạt động hoàn hảo với mọi từ khóa phổ thông (`9 tuổi`, `học phí`, `nút ghế`, `chủ nhật`, `dự thính`).
4. Hệ thống Kỹ năng và Góc Phụ huynh có cấu trúc phân tầng rõ ràng, khoa học.
5. Technical SEO đạt chuẩn quốc tế (Có `sitemap.xml`, `robots.txt`, FAQPage Schema, Organization Schema).
6. Trải nghiệm mobile mượt mà, trực quan với thanh điều hướng công thái học (Thumb Zone).
7. Đạt đầy đủ tất cả các ngưỡng định lượng nêu trên và chạy thông suốt trên Vercel Production.
