/**
 * WEB WORKER: 
 *  - là một tính năng của JS cho phép bạn chạy code ở luồng nền (background thread), 
 *    tách biệt khỏi luồng chính (main thread) của trình duyệt
 * 
 * VẤN ĐỀ NÓ GIẢI QUYẾT:
 *  + Javascript mặc định chạy single-thread (1 luồng)
 *    -> nếu bạn xử lý nặng (loop lớn, tính toán phức tạp, parse data,...) thì UI sẽ bị đơ/lag
 *  
 *  + Web Worker giúp:
 *      - chạy tác vụ nặng ở background
 *      - không block UI
 *      - App mượt hơn
 * KHI NÀO NÊN DÙNG WEB WORKER?
 *  - xử lý dự liệu lớn (JSON, CSV,...)
 *  - tính toán phức tạp
 *  - encode/decode ảnh, video
 *  - Machine learning nhẹ trên browser
 *  - Real-time data processing
 * 
 *  CÁC LOẠI WEB WORKER
 *     1. Dedicated Worker (Worker thường) - “Tôi thuê 1 nhân viên riêng để làm việc nặng cho tôi”
 *       - đây là loại sẽ dùng thường xuyên
 *       - Bản chất:
 *          + 1 file JS -> 1 Worker
 *          + 1 tab / 1 script dùng
 *          + không share được với tab khác.
 * 
 *      📦 Ví dụ use case
            Tính toán lớn (loop, xử lý data)
            Filter/search bảng lớn
            Parse file CSV/JSON
 *      
 *     2. Shared Worker - Dùng khi bạn muốn nhiều tab cùng dùng chung 1 worker
 *        - 1 worker → nhiều tab kết nối vào
 *        - Các tab giao tiếp qua worker
 *        - “Một server nhỏ chạy trong browser, nhiều tab cùng kết nối vào”
 * 
 *      Ví dụ use case
            Chat app (nhiều tab cùng user)
            Sync data giữa các tab
            WebSocket dùng chung (tránh mở nhiều connection)

        3. 🔥 Service Worker (quan trọng nhất nếu làm web hiện đại)
            👉 Đây KHÔNG phải để tính toán, mà là để control network + cache

        💡 Bản chất
            Chạy như proxy giữa browser và server
                Có thể:
                Cache dữ liệu
                Chạy offline
                Intercept request
 *      - “Một lớp đứng giữa internet và app của bạn, quyết định lấy data từ đâu”
        
        📦 Use case cực thực tế
                PWA (Progressive Web App)
                Offline mode
                Cache API / assets
                Push notification
 *      
 */    