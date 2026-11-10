/* IHD GROUP V3 trilingual interactive review.
 * Source of company philosophy: owner-supplied in-salon photographs (Nov 2026).
 * No customer information transmitted by this translation layer.
 */
(()=>{
  "use strict";
  const culture=window.IHD_CULTURE;
  if(!culture){console.error("IHD review: missing culture.js");return;}
  const map=new Map();
  const T=(source,zh,ms,en=source)=>map.set(source,{zh,en,ms});
  // Site navigation and notification banner
  [
    ["Home","首页","Laman Utama"],["Services","服务","Perkhidmatan"],
    ["Gallery","作品集","Galeri"],["Book Now","立即预约","Tempah Janji Temu"],
    ["Shop","商城","Kedai"],["Our Story","品牌故事","Kisah Kami"],
    ["Backend Demo","后台演示","Demo Pentadbiran"],["Culture","企业文化","Budaya Korporat"],
    ["IHD GROUP · CUSTOMER WEBSITE V2 PREVIEW | WHATSAPP ENQUIRIES · NO ONLINE CONFIRMED BOOKINGS OR PAYMENTS","IHD GROUP · 三语审核样板｜WhatsApp 预约询问 · 暂无线上确认或付款","IHD GROUP · Pratonton tiga bahasa untuk semakan | Pertanyaan WhatsApp · Tiada tempahan atau bayaran langsung","IHD GROUP · Trilingual draft for approval | WhatsApp enquiries · No confirmed online bookings or payments"],
    ["We Inspire Your Beauty Sense","启发你的美丽品味","Menyerlahkan cita rasa kecantikan anda"],
    ["Beauty begins with inspiration.","美丽，从灵感开始。","Kecantikan bermula dengan inspirasi."],
    ["Professional hair artistry, scalp wellness and a future home-care collection. Explore our product categories, delivery information and salon booking below.","专业美发、头皮护理与未来居家护发系列。欢迎了解产品、邮递资讯及预约服务。","Seni dandanan rambut profesional, penjagaan kulit kepala dan koleksi penjagaan di rumah pada masa depan. Terokai produk, maklumat penghantaran dan tempahan salon kami."],
    ["启发你的美丽品味 · 北马专业发型与头皮护理品牌","北马专业发型设计与头皮护理","Rekaan rambut profesional dan penjagaan kulit kepala di utara Malaysia","Professional hair design and scalp care in northern Malaysia"],
    ["Book Now · 预约 →","立即预约 →","Tempah Sekarang →","Book Now →"],
    ["Explore Shop →","浏览商城 →","Terokai Kedai →"],
    ["CONCEPT ONLY · NO LIVE BOOKINGS","审核样板 · 尚未开放正式预约","Konsep untuk semakan · Tempahan langsung belum tersedia"],
    ["LICENSED STOCK PHOTO · NOT AN IHD BRANCH","示意图片 · 非 IHD 实际门市","Foto ilustrasi · Bukan cawangan IHD"],
    ["Professional Haircare","专业护发产品","Penjagaan Rambut Profesional"],
    ["洗护 · 头皮护理 · Styling","洗护 · 头皮护理 · 造型","Syampu · Kulit kepala · Penggayaan","Shampoo · Scalp care · Styling"],
    ["In-Salon Collection","门市取货咨询","Pengambilan di Salon"],
    ["可询问两家门市取货详情","请向门市询问取货详情","Tanya salon tentang pengambilan","Ask either outlet about collection"],
    ["Delivery Enquiries","邮递与配送","Pertanyaan Penghantaran"],
    ["邮递范围及运费须确认","邮递范围与运费待店主确认","Kawasan dan caj penghantaran perlu disahkan","Delivery areas and costs pending confirmation"],
    ["THE HAIRCARE EDIT · 专业洗护","专业护发产品","KOLEKSI PENJAGAAN RAMBUT","THE HAIRCARE EDIT"],
    ["Bring the salon experience home.","把专业美发护理带回家。","Bawa pengalaman salon ke rumah."],
    ["Discover thoughtful care for everyday hair and scalp needs. Our future online collection will bring salon-recommended routines closer to you.","了解日常头发与头皮护理。未来线上商品系列将让专业护发更方便。","Kenali penjagaan harian rambut dan kulit kepala. Koleksi dalam talian kami pada masa depan akan memudahkan rutin penjagaan yang disyorkan salon."],
    ["Explore All Products →","浏览全部产品 →","Lihat Semua Produk →"],
    ["01 · DAILY CARE","01 · 日常洗护","01 · PENJAGAAN HARIAN"],
    ["Shampoo & Conditioner","洗发水与护发素","Syampu & Perapi"],
    ["温和清洁与日常护发，让居家护理更有条理。","温和清洁与日常护理，帮助建立适合自己的护发习惯。","Pembersihan lembut dan penjagaan harian untuk rutin rambut yang lebih teratur.","Gentle cleansing and conditioning for your daily haircare routine."],
    ["Category preview · 商品品牌及售价待确认","商品类别预览 · 品牌与价格待确认","Pratonton kategori · Jenama dan harga belum disahkan","Category preview · Brand and pricing to be confirmed"],
    ["Enquire on WhatsApp ↗","WhatsApp 询问 ↗","Tanya melalui WhatsApp ↗"],
    ["02 · SCALP WELLNESS","02 · 头皮护理","02 · PENJAGAAN KULIT KEPALA"],
    ["Scalp Care","头皮护理","Penjagaan Kulit Kepala"],
    ["头皮护理系列，按个人发质向专业人员咨询合适选择。","头皮护理类别，欢迎咨询适合自己发质的选择。","Produk penjagaan kulit kepala; dapatkan nasihat profesional untuk kesesuaian rambut anda.","Scalp-care options; consult a stylist for guidance suited to your hair."],
    ["03 · EXTRA TREATMENT","03 · 深层护理","03 · RAWATAN TAMBAHAN"],
    ["Hair Treatment & Styling","头发护理与造型","Rawatan Rambut & Penggayaan"],
    ["深层护理及造型产品类别，延续日常发型质感。","深层护理与造型系列，让日常整理更方便。","Pilihan rawatan dan penggayaan untuk rutin rambut harian.","Treatment and styling categories to support your everyday look."],
    ["Illustrative stock images. Product availability, brands, prices, retail authorization and individual suitability must be confirmed by IHD Group. 示意图片非 IHD 实际货品；网店尚未正式开放销售。","所有图片为示意参考。商品是否在售、价格及适用性须由 IHD 确认；网店尚未正式开卖。","Semua imej adalah ilustrasi. Ketersediaan, harga dan kesesuaian produk perlu disahkan oleh IHD; kedai dalam talian belum dibuka.","Illustrative images only. IHD has not confirmed retail stock, pricing or product suitability; online sales are not yet active."],
    ["ORDERING & DELIVERY · 商品订购与邮递","产品订购与邮递","PESANAN & PENGHANTARAN","ORDERING & DELIVERY"],
    ["Haircare, made more convenient.","让护发与购物更方便。","Penjagaan rambut yang lebih mudah."],
    ["From product enquiries to future online ordering and delivery. Speak with the salon first to confirm which products are available and how they can reach you.","未来可从产品咨询逐步扩展到网购与邮递。现阶段请先联系门市确认产品和配送方式。","Daripada pertanyaan produk hingga pembelian dan penghantaran dalam talian pada masa depan. Sila hubungi salon terlebih dahulu untuk semakan stok dan pilihan penghantaran."],
    ["Ask About Delivery on WhatsApp ↗","WhatsApp 查询邮递 ↗","Tanya Penghantaran melalui WhatsApp ↗"],
    ["Ask & Choose · 询问产品","01 询问及选择产品","01 Tanya & Pilih","01 Ask & Choose"],
    ["先联系 IHD 查询护理产品、规格、售价及当前库存。","先向 IHD 查询产品、规格、价格及现有库存。","Hubungi IHD untuk semak produk, saiz, harga dan stok.","Contact IHD to ask about products, sizes, prices and stock."],
    ["Collection or Shipping · 门店取货／邮递","02 门市取货或邮递","02 Ambil di Salon atau Penghantaran","02 Collection or Shipping"],
    ["可询问 Raja Uda 或 Sungai Petani 门市取货；西马、东马邮递服务是否开放，需由店方确认。","可询问 Raja Uda 或 Sungai Petani 取货；西马及东马邮递范围仍需确认。","Tanya tentang pengambilan di Raja Uda atau Sungai Petani; penghantaran ke Semenanjung, Sabah dan Sarawak perlu disahkan.","Ask about pickup at either branch; delivery coverage for Peninsular and East Malaysia remains unconfirmed."],
    ["Charges & Estimated Arrival · 运费与到货","03 运费与预计送达","03 Caj & Anggaran Ketibaan","03 Charges & Arrival"],
    ["运费、快递公司、预计送达时间和退换货政策尚未公布；下单前以门店确认为准。","运费、快递公司、送达时间与退换货政策尚待确认。","Caj penghantaran, syarikat kurier, jangka masa dan polisi pemulangan belum disahkan.","Shipping fees, courier, arrival estimates and return policy are not confirmed yet."],
    ["Future Online Checkout · 未来线上订购","04 未来线上付款","04 Pembayaran Dalam Talian (Akan Datang)","04 Future Online Checkout"],
    ["网上付款、配送追踪与订单查询正在规划中，目前暂不收取线上付款。","线上付款、物流追踪与订单查询正在规划；目前不收线上付款。","Pembayaran, penjejakan dan semakan pesanan sedang dirancang; bayaran dalam talian belum diterima.","Payments, tracking and order lookup are planned; no online payments are currently accepted."],
    ["HAIRCARE NOTES · 护发资讯","护发资讯","NOTA PENJAGAAN RAMBUT","HAIRCARE NOTES"],
    ["Useful tips before your next visit.","预约前值得了解的护发知识。","Tip berguna sebelum kunjungan anda."],
    ["CARE NOTE 01","护发笔记 01","NOTA PENJAGAAN 01"],
    ["Choose a routine for your hair type","找到适合自己发质的护理方式","Pilih rutin mengikut jenis rambut anda"],
    ["洗发水与护发素应按头皮状况、发质及日常习惯选择，护理需求可咨询发型师。","根据头皮状况、发质与习惯挑选洗护产品，必要时咨询发型师。","Pilih syampu dan perapi mengikut kulit kepala, jenis rambut dan rutin harian; dapatkan nasihat pendandan rambut jika perlu.","Choose shampoo and conditioner based on scalp condition, hair type and daily habits; consult a stylist when needed."],
    ["CARE NOTE 02","护发笔记 02","NOTA PENJAGAAN 02"],
    ["Colour & treatment consultations","染烫与护理咨询","Konsultasi Warna & Rawatan"],
    ["染烫前可与发型师讨论发质、保养习惯、预期效果及维护需求。","染烫前与发型师讨论发质、预期效果和日常维护。","Sebelum mewarna atau mengeriting, bincang keadaan rambut, hasil yang diinginkan dan penjagaan susulan.","Discuss hair condition, desired results and maintenance before colouring or perming."],
    ["CARE NOTE 03","护发笔记 03","NOTA PENJAGAAN 03"],
    ["Plan your salon appointment","预约前准备","Rancang Temu Janji Salon"],
    ["预约时可先说明服务、期望造型和方便的时段，以便门市确认安排。","预约时说明服务需求、期望造型和方便时间，以便门市安排。","Nyatakan perkhidmatan, gaya yang dikehendaki dan masa sesuai apabila membuat pertanyaan temu janji.","Describe your desired service, hairstyle and preferred time when requesting an appointment."],
    ["General educational tips, not personalized medical advice or official product claims. 如有持续性头皮不适，应向合格医疗专业人员咨询。","一般护发知识，非医疗建议；若头皮持续不适，请咨询合格医疗人员。","Maklumat umum, bukan nasihat perubatan; dapatkan bantuan profesional kesihatan bagi masalah kulit kepala yang berterusan.","General guidance, not medical advice; seek qualified care for persistent scalp symptoms."],
    // News
    ["IHD INSIGHTS · 最新资讯","IHD 资讯","BERITA & MAKLUMAT IHD","IHD INSIGHTS"],
    ["What's New / 美发新品与科技","最新产品与美发科技","Produk & Teknologi Kecantikan Terkini","What's New / Hair Products & Technology"],
    ["了解专业产品、护发技术与业内趋势 · 整理于 2026年11月9日","了解护发产品、技术与行业动向 · 资料整理日期：2026年11月9日","Kenali produk, teknologi rambut dan trend industri · Dikurasi pada 9 Nov 2026","Professional products, haircare technology and industry trends · Curated 9 Nov 2026"],
    ["全部 All","全部","Semua","All"],
    ["新产品","新产品","Produk Baharu","New Products"],
    ["新科技","新科技","Teknologi Baharu","New Technology"],
    ["Keratin Alpha Sleek — 顺滑护理系列","Keratin Alpha Sleek · 顺滑护理系列","Keratin Alpha Sleek · Rangkaian Melicinkan Rambut","Keratin Alpha Sleek · Professional Smoothing Range"],
    ["L’Oréal Professionnel 官方介绍专业顺滑洗护、护理与精华系列，聚焦毛躁管理和日常造型效率。相关功效以品牌测试及使用说明为准。","L’Oréal Professionnel 专业顺滑护理与精华资讯，产品表现以官方说明为准。","L’Oréal Professionnel memperkenalkan rangkaian penjagaan dan serum untuk membantu mengurus rambut mengembang. Rujuk maklumat rasmi jenama.","L’Oréal Professionnel presents a professional smoothing care range; follow official usage and efficacy information."],
    ["Chronologiste Overnight Youth Serum — 夜间护发精华","Chronologiste 夜间护发精华","Chronologiste · Serum Rambut Semalaman","Chronologiste Overnight Youth Serum"],
    ["Kérastase 介绍免冲洗夜间精华，关注干燥、暗沉及毛躁等可见发质问题。可了解夜间居家护理的新选择。","Kérastase 夜间免冲洗护发精华资讯，可了解居家护理方式。","Kérastase memperkenalkan serum rambut tanpa bilas untuk penjagaan waktu malam; ketahui rutin penjagaan di rumah.","Kérastase introduces a leave-in overnight serum as part of an at-home haircare routine."],
    ["AirLight Pro — 红外光辅助吹干科技","AirLight Pro · 红外光辅助吹发科技","AirLight Pro · Teknologi Pengeringan Berbantu Inframerah","AirLight Pro · Infrared-Assisted Hair Drying"],
    ["专业吹风工具结合红外光、热能与气流，厂商强调干发速度和能源效率；目前为行业技术资讯，非 IHD 门店设备声明。","专业吹发工具结合红外光和气流技术；仅作行业资讯，不表示 IHD 目前使用该设备。","Alat pengering profesional menggabungkan teknologi inframerah dan aliran udara; ini maklumat industri, bukan pengesahan penggunaan di IHD.","A professional dryer combines infrared and airflow technology; industry news only, not an IHD equipment claim."],
    ["查看官方资料 / Original Source ↗","查看品牌官方资料 ↗","Baca Sumber Rasmi ↗","View Official Source ↗"],
    ["以上为独立行业资讯，内容及图片仅作展示；不代表 IHD 已售卖相关商品、拥有相关设备或获品牌授权。点击各卡片可阅读品牌官方网站资料；整理日期不是原始新闻发布日。","行业资讯与示意图片不代表 IHD 正在销售、使用或获得品牌授权；整理日期不等于原始发布日期。","Berita industri dan imej ilustrasi tidak membuktikan IHD menjual, menggunakan atau mendapat kebenaran jenama tersebut. Tarikh kurasi bukan tarikh terbit asal.","Industry information and illustrative images do not confirm IHD stocks, uses or is authorised by any featured brand. Curated date is not the original release date."],
    ["浏览护理类别 →","浏览护发产品 →","Lihat Kategori Penjagaan Rambut →","Browse Haircare Categories →"],
    ["WhatsApp 查询产品 ↗","WhatsApp 产品咨询 ↗","Tanya Produk melalui WhatsApp ↗","WhatsApp Product Enquiry ↗"],
    // Brand and services
    ["An Experience Made for You","为你打造的美发体验","Pengalaman Istimewa Untuk Anda"],
    ["More than a hairstyle.","不只是发型，更是自信。","Lebih daripada sekadar gaya rambut."],
    ["Founder & Director","创办人兼董事","Pengasas & Pengarah"],
    ["Professional artistry · Personal attention · Hair & scalp wellbeing","专业美发 · 用心服务 · 头发与头皮护理","Seni rambut profesional · Layanan peribadi · Penjagaan rambut dan kulit kepala"],
    ["Discover Our Story","阅读品牌故事","Kenali Kisah Kami"],
    ["Discover Your Look","探索专属造型","Temui Gaya Anda"],
    ["Our Services.","专业服务","Perkhidmatan Kami"],
    ["Durations are samples and prices require the salon's confirmation.","服务时长仅作示例，实际价格与预约时间须向门市确认。","Tempoh hanya contoh; harga dan ketersediaan perlu disahkan oleh salon."],
    ["Professional Hair Artistry / 发型艺术","专业发型艺术","Seni Dandanan Rambut Profesional","Professional Hair Artistry"],
    ["Find your next look.","寻找你的下一个造型。","Temui gaya baharu anda."],
    ["A polished image showcase using free-license Unsplash reference photography.","以下照片为有使用许可的美发示意图片。","Imej contoh dengan lesen penggunaan yang sesuai daripada Unsplash.","Illustrative hairstyle photography from Unsplash."],
    ["These are illustrative stock images, not actual IHD customer results.","这些不是 IHD 顾客的真实作品。","Ini bukan hasil sebenar pelanggan IHD.","These are not actual IHD client results."],
    ["IHD can replace all photos with authorised work through the future image library.","未来可用 IHD 已授权的作品替换。","IHD boleh menggantikannya dengan hasil kerja yang telah mendapat kebenaran.","IHD may replace them with authorised client work."],
    ["Signature Hair Styling","经典发型设计","Rekaan Rambut Istimewa"],
    ["Colour & Dimension","染发与层次","Warna & Dimensi"],
    ["Treatment Rituals","护理体验","Ritual Rawatan"],
    ["Modern Hair Design","时尚发型","Rekaan Rambut Moden"],
    ["The Hair Experience","专业美发体验","Pengalaman Rambut"],
    ["Salon Design Mood","门店空间参考","Inspirasi Ruang Salon"],
    ["Want to view actual IHD salon images? Open each branch’s Google Maps listing in the Locations section below. Google photos are not copied or rehosted here.","要查看 IHD 真实门店照片，请通过下方 Google Maps 分店链接查看；本站没有擅自转载这些照片。","Untuk melihat foto sebenar cawangan IHD, buka pautan Google Maps setiap cawangan di bawah. Foto Google tidak disalin ke sini."],
    ["Plan Your Visit","规划到店时间","Rancang Kunjungan Anda"],
    ["Book an appointment.","预约发型服务","Tempah Janji Temu"],
    ["Choose a branch, service, date and time, then request the appointment via WhatsApp. The salon must confirm availability before it becomes a real booking. This preview does not collect or store any customer information on a server.","选择分店、服务、日期和时间，再通过 WhatsApp 提交询问。只有门市回复确认后才算预约成功；此样板不在服务器保存客户资料。","Pilih cawangan, perkhidmatan, tarikh dan masa, kemudian hantar pertanyaan melalui WhatsApp. Tempahan hanya sah selepas salon mengesahkan ketersediaan. Demo ini tidak menyimpan maklumat pelanggan pada pelayan."],
    ["01 / Branch · 分店","01 / 选择分店","01 / Cawangan"],
    ["02 / Service · 服务","02 / 选择服务","02 / Perkhidmatan"],
    ["03 / Stylist preference","03 / 发型师偏好","03 / Pilihan Pendandan Rambut"],
    ["Any available stylist","由门店安排发型师","Mana-mana Pendandan Yang Tersedia"],
    ["Ask for preferred stylist","指定发型师（须确认）","Minta Pendandan Pilihan"],
    ["04 / Date","04 / 日期","04 / Tarikh"],
    ["05 / Sample time","05 / 参考时间","05 / Masa Contoh"],
    ["06 / Name · 顾客姓名 *","06 / 姓名 *","06 / Nama *"],
    ["07 / Mobile · 电话号码 *","07 / 手机号码 *","07 / Nombor Telefon *"],
    ["08 / Remarks · 备注","08 / 备注","08 / Catatan"],
    ["I understand this is a WhatsApp","我明白这只是 WhatsApp","Saya faham ini hanyalah","I understand this is a WhatsApp"],
    ["request","预约询问","pertanyaan","request"],
    [", not a confirmed appointment. My details will be shared only when I send the WhatsApp message. / 我明白预约需由门店确认。","，并非已确认预约。只有在 WhatsApp 点击发送后，资料才会传给门店。","melalui WhatsApp, bukan tempahan yang disahkan. Maklumat saya hanya dikongsi setelah saya menekan Hantar di WhatsApp.",", not a confirmed booking. My details are only shared after I press Send in WhatsApp."],
    ["Prepare WhatsApp Appointment →","准备 WhatsApp 预约询问 →","Sediakan Pertanyaan WhatsApp →"],
    ["Appointment Concept","预约系统构想","Konsep Tempahan"],
    ["Your Hair, Your Time.","你的发型，你的时间。","Rambut Anda, Masa Anda."],
    ["How it works: ① Choose services and branch ② Enter your contact details ③ Open WhatsApp ④ Tap Send ⑤ Salon confirms the time. The website cannot guarantee an available slot yet.","流程：①选服务与分店 ②填写资料 ③打开 WhatsApp ④点击发送 ⑤等待门市确认。网页暂时不能确保时段有空。","Langkah: ① Pilih cawangan & perkhidmatan ② Isi maklumat ③ Buka WhatsApp ④ Tekan Hantar ⑤ Tunggu pengesahan salon. Masa belum dijamin."],
    ["Official WhatsApp enquiry destination:","WhatsApp 预约询问号码：","Nombor WhatsApp untuk pertanyaan:"],
    ["The Care Edit","精选护发类别","Pilihan Penjagaan Rambut"],
    ["IHD Haircare Shop.","IHD 护发商城","Kedai Penjagaan Rambut IHD"],
    ["The products are placeholder categories, not verified retail items. No prices, inventory or real checkout.","这些只是产品类别示意，尚未核实商品、价格与库存，也无法正式付款。","Ini kategori contoh, bukan produk runcit yang telah disahkan. Tiada harga, stok atau pembayaran sebenar."],
    ["Sample basket is empty.","演示购物车为空。","Bakul demo masih kosong."],
    ["Our Story","我们的故事","Kisah Kami"],
    ["Crafted around your confidence.","以专业成就你的自信。","Dicipta untuk keyakinan anda."],
    ["Founder of the Inspiration Hair Design Group. The founding year and full founder biography are to be verified and approved before the official site launches.","Steve Ooi 为 IHD 集团创办人。创立年份与完整人物介绍仍待正式核实。","Steve Ooi ialah pengasas Kumpulan IHD. Tahun penubuhan dan biografi lengkap perlu disahkan sebelum pelancaran rasmi."],
    ["We Inspire Your Beauty Sense.","启发你的美丽品味。","Menyerlahkan cita rasa kecantikan anda."],
    ["Proposed mission: personalised design, hair and scalp care, professional technique and genuine service. This wording is a proposal, not a historical official statement.","最新已提供正式企业文化与宣言，完整内容请点击「企业文化」查看。","Budaya korporat dan manifesto rasmi telah dibekalkan. Klik 'Budaya Korporat' untuk membaca versi penuh.","Original company culture and manifesto have now been supplied. Open Corporate Culture for the full approved-source draft."],
    ["George Town former branch:","George Town 旧分店：","Cawangan lama George Town:"],
    ["closed","已关闭","ditutup"],
    ["— not bookable. Current branches are Raja Uda and Sungai Petani.","，不可预约。目前营业分店为 Raja Uda 和 Sungai Petani。","— tidak menerima tempahan. Cawangan aktif ialah Raja Uda dan Sungai Petani."],
    // Admin prototype and branches
    ["IHD GROUP OS · Backend Preview","IHD GROUP OS · 后台演示","IHD GROUP OS · Demo Pentadbiran"],
    ["Content & Import Studio.","内容与导入管理","Studio Kandungan & Import"],
    ["Public demonstration of the future admin dashboard: editing, bookings, image previews and CSV templates. There is NO real database or staff login; sample records are never shared between devices.","后台仅供体验：内容编辑、预约草稿、图片和 CSV 模板。没有真实登录或共用数据库，资料不会跨设备同步。","Demo pentadbiran ini hanya untuk pratonton penyuntingan, draf tempahan, imej dan templat CSV. Tiada log masuk kakitangan atau pangkalan data sebenar; data tidak disegerakkan antara peranti."],
    ["Content & Images","内容与图片","Kandungan & Imej"],["Booking List · 预约名单","预约草稿名单","Senarai Tempahan Demo"],
    ["CSV Import Templates","CSV 导入模板","Templat Import CSV"],["Users & Roles","用户与权限","Pengguna & Peranan"],
    ["Edit Homepage","编辑首页","Sunting Laman Utama"],
    ["Hero title","首页主标题","Tajuk Utama"],["Introduction","简介","Pengenalan"],
    ["Hero photo — JPG / PNG / WebP (max 2MB). Preview only, no upload.","首页图片 — JPG/PNG/WebP（不超过2MB），只在本机预览，不上传。","Foto utama — JPG/PNG/WebP (maks. 2MB). Pratonton setempat sahaja, tiada muat naik."],
    ["Temporary branded illustration","临时品牌参考图","Ilustrasi Jenama Sementara"],
    ["Apply locally & preview","本机应用并预览","Gunakan & Pratonton Setempat"],
    ["Reset Demo","重置演示","Tetap Semula Demo"],
    ["Import Template Centre","数据导入中心","Pusat Templat Import"],
    ["Download a separate CSV for every module, upload and validate columns/row counts, preview first rows. Actual secured server-side import requires company login, validation, approval and audit.","每个模块都有 CSV 模板，可上传、核对栏目和预览。真实数据导入需要员工登录、权限审查及审核记录。","Setiap modul mempunyai templat CSV untuk dimuat turun, disemak dan dipratonton. Import sebenar memerlukan log masuk, kebenaran, kelulusan dan audit."],
    ["Module","模块","Modul"],["↓ Download Template CSV","↓ 下载 CSV 模板","↓ Muat Turun Templat CSV"],
    ["Choose CSV file","选择 CSV 文件","Pilih Fail CSV"],["Or paste CSV","或粘贴 CSV","Atau Tampal CSV"],
    ["Validate Demo CSV","验证演示 CSV","Semak CSV Demo"],
    ["Bookings Dashboard / 预约管理","预约管理演示","Papan Pemuka Tempahan Demo","Bookings Dashboard"],
    ["Appointment Enquiry List","预约询问名单","Senarai Pertanyaan Tempahan"],
    ["DEMO · this browser only","演示 · 仅当前浏览器","DEMO · Pelayar Ini Sahaja"],
    ["The true salon will receive WhatsApp requests in its WhatsApp inbox (012-787 9928), only after customers tap Send. This public demo does not have secure staff login or a shared database. Drafts shown here are visible only in this open browser session. Not an actual group booking ledger.","顾客在 WhatsApp 点击发送后，门店才会收到消息。此公开演示没有员工权限与共享数据库，名单仅是当前浏览器草稿，不是正式预约记录。","Salon hanya menerima mesej apabila pelanggan menekan Hantar dalam WhatsApp. Demo ini tiada log masuk selamat atau pangkalan data bersama; draf hanya berada dalam pelayar ini."],
    ["Session drafts / 本机预约草稿","当前浏览器草稿","Draf Sesi Semasa","Session Drafts"],
    ["Pending confirmation / 待确认","等待门店确认","Menunggu Pengesahan","Pending Confirmation"],
    ["Operating outlets / 营业分店","营业分店","Cawangan Aktif","Operating Branches"],
    ["Branch / 分店","分店","Cawangan","Branch"],["All outlets","所有分店","Semua Cawangan"],
    ["Clear session drafts","清空本机草稿","Kosongkan Draf Sesi"],
    ["Reference","编号","Rujukan"],["Guest · 电话","顾客 · 电话","Pelanggan · Telefon","Guest · Phone"],
    ["Branch / Service","分店／服务","Cawangan / Perkhidmatan"],
    ["Requested slot","申请时段","Masa Diminta"],["Status","状态","Status"],["Action","操作","Tindakan"],
    ["Sample records never synchronize to the salon or to other browsers. For real booking data, production needs a private database, authenticated users, tenant/branch access permissions and audit logs.","演示记录不会同步到分店或其他浏览器。正式系统必须配置独立数据库、员工账号、分店权限与审计。","Rekod demo tidak disegerakkan ke salon atau pelayar lain. Sistem sebenar memerlukan pangkalan data persendirian, akaun kakitangan, kawalan cawangan dan audit."],
    ["Production roles require authenticated tenant/branch-aware server permissions. The public demo does not let anyone become an actual admin.","正式角色需要服务器认证与分店权限；公众演示不能创建真实管理员。","Peranan sebenar memerlukan pengesahan dan akses mengikut cawangan; demo awam tidak mewujudkan pentadbir sebenar."],
    ["Our Locations · 目前营业分店","营业分店位置","LOKASI CAWANGAN AKTIF","Operating Locations"],
    ["Visit Inspiration Hair Design.","欢迎到访 IHD。","Kunjungi Inspiration Hair Design."],
    ["Our Locations · 两家营业分店","我们的两家分店","DUA CAWANGAN KAMI","Our Two Locations"],
    ["Find your nearest salon.","寻找附近的门市。","Cari Salon Terdekat."],
    ["The salon interior photos below are","下方门市照片为","Imej dalaman salon di bawah hanyalah","The salon photos below are"],
    ["licensed visual references, not photographs of these exact branches","有许可的参考图，并非该分店真实照片","rujukan visual berlesen, bukan foto cawangan sebenar","licensed illustrative references, not actual IHD branch photos"],
    ["Image shown is a design reference only, not the actual IHD Raja Uda branch.","图片仅供设计参考，不是 Raja Uda 门市实景。","Imej ini untuk rujukan reka bentuk, bukan cawangan sebenar Raja Uda."],
    ["Image shown is a design reference only, not the actual IHD Sungai Petani branch.","图片仅供设计参考，不是 Sungai Petani 门市实景。","Imej ini untuk rujukan reka bentuk, bukan cawangan sebenar Sungai Petani."],
    ["Actual photos & map ↗","实际照片与地图 ↗","Foto Sebenar & Peta ↗"],
    ["Book at Raja Uda","预约 Raja Uda","Tempah di Raja Uda"],
    ["Book at Sungai Petani","预约 Sungai Petani","Tempah di Sungai Petani"],
    ["Inspiration Hair Design Group · E CUBE interactive design proposal","IHD 集团 · E CUBE 互动设计提案","Kumpulan IHD · Cadangan Reka Bentuk Interaktif E CUBE"],
    ["Proposed domain: ihdgroup.my (not yet registered)","拟用域名：ihdgroup.my（尚未注册）","Domain dicadangkan: ihdgroup.my (belum didaftarkan)"],
    ["Temporary wordmark; verified original logo not yet available. No actual booking, order or user registration.","目前为临时字标，正式 Logo 尚待核实。此页面未启用实际预约、订单及会员注册。","Logo teks sementara; logo rasmi masih menunggu pengesahan. Tiada tempahan, pesanan atau pendaftaran sebenar."],
    // Dynamically generated service/product entries
    ["Signature Haircut","专业剪发","Potongan Rambut Profesional"],["Creative Colour","创意染发","Pewarnaan Kreatif"],
    ["Korean / Digital Perm","韩式／数码烫发","Perm Korea / Digital"],["Scalp Care Ritual","头皮护理","Rawatan Kulit Kepala"],
    ["Professional Haircare Collection","专业洗护系列","Koleksi Penjagaan Rambut Profesional"],
    ["Scalp Wellness Collection","头皮护理系列","Koleksi Penjagaan Kulit Kepala"],
    ["Treatment Collection","深层护理系列","Koleksi Rawatan Rambut"],
    ["Book demo →","模拟预约 →","Demo Tempahan →"],
    ["Add to demo basket +","加入模拟购物车 +","Tambah ke Bakul Demo +"],
    ["Clear basket","清空购物车","Kosongkan Bakul"],
    ["Your demo basket is empty.","模拟购物车为空。","Bakul demo anda masih kosong."],
    ["Demo only. No orders or payment.","仅供演示，不会产生订单或付款。","Demo sahaja. Tiada pesanan atau bayaran."],
    ["WhatsApp · 012-787 9928","WhatsApp 咨询 · 012-787 9928","WhatsApp · 012-787 9928"],
    ["Name","姓名","Nama"],["Mobile","电话","Telefon"],["Remarks","备注","Catatan"],
    ["pending","待确认","Menunggu Pengesahan"],["Confirmed","已确认","Disahkan"],
    ["Demo","演示","Demo"]
  ].forEach(a=>T(...a));

  const origNodes=new WeakMap();
  const origAttr=new WeakMap();
  let current="zh"; // Default to Chinese for owner review
  let translating=false;let rafPending=false;
  function setNodeTranslation(node){
    if(!node||!node.parentElement)return;
    if(node.parentElement.closest("script,style,svg,#ihd-culture"))return;
    if(!origNodes.has(node))origNodes.set(node,node.nodeValue||"");
    const original=origNodes.get(node),clean=original.trim();
    const found=map.get(clean);
    if(!found)return;
    const result=found[current]||clean;
    const lead=(original.match(/^\s*/)||[""])[0],tail=(original.match(/\s*$/)||[""])[0];
    const target=lead+result+tail;
    if(node.nodeValue!==target)node.nodeValue=target;
  }
  function translateDom(){
    if(translating)return;translating=true;
    try{
      const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
      let item;
      while(item=walker.nextNode())setNodeTranslation(item);
      document.querySelectorAll("input[placeholder],textarea[placeholder]").forEach(el=>{
        if(!origAttr.has(el))origAttr.set(el,el.getAttribute("placeholder")||"");
        const text=origAttr.get(el),i=map.get(text);
        if(i)el.placeholder=i[current]||text;
      });
      const hero=document.querySelector("#heroText");
      if(hero && hero.dataset.edited==="true"){} // Preserve in-browser editing.
      document.querySelectorAll(".ihd-lang button").forEach(b=>{
        const yes=b.dataset.lang===current;
        b.classList.toggle("current",yes);
        b.setAttribute("aria-pressed",String(yes));
      });
      document.documentElement.lang=current==="zh"?"zh-CN":current;
      document.title=({zh:"IHD GROUP · 三语品牌网站与企业文化审核稿",en:"IHD GROUP · Trilingual Website & Corporate Culture Review",ms:"IHD GROUP · Semakan Laman Web & Budaya Korporat Tiga Bahasa"})[current];
    }finally{translating=false;}
  }
  function h(tag,cls,text){
    const e=document.createElement(tag);if(cls)e.className=cls;
    if(text!==undefined)e.textContent=text;return e;
  }
  function renderCulture(){
    const shell=document.getElementById("ihd-culture");
    if(!shell)return;
    const l=current,d=culture;
    shell.replaceChildren();
    // The public review page must NEVER receive the internal training corpus.
    // Access to source content is enforced in the authenticated owner application.
    if(!Array.isArray(d.rows) || d.rows.length===0){
      const cover=h("div","ihd-culture-cover");
      cover.append(
        h("div","ihd-culture-eyebrow",({zh:"IHD GROUP · 内训资料权限",en:"IHD GROUP · INTERNAL TRAINING",ms:"IHD GROUP · LATIHAN DALAMAN"})[l]),
        h("h1","",d.cultureTitle[l]),
        h("p","ihd-culture-lead",d.cultureIntro[l])
      );
      shell.appendChild(cover);
      const wrap=h("div","ihd-culture-container");
      const notice=h("div","ihd-review-note");
      notice.append(h("h2","ihd-culture-heading",d.manifestoTitle[l]),h("p","",d.reviewNote[l]));
      wrap.appendChild(notice);
      const back=h("button","button",({zh:"返回品牌故事 →",en:"Back to Our Story →",ms:"Kembali ke Kisah Kami →"})[l]);
      back.onclick=()=>window.page("about");wrap.appendChild(back);
      shell.appendChild(wrap);
      return;
    }
    const cover=h("div","ihd-culture-cover");
    cover.append(
      h("div","ihd-culture-eyebrow",({zh:"INSPIRATION · 企业精神",en:"INSPIRATION · OUR IDENTITY",ms:"INSPIRATION · IDENTITI KAMI"})[l]),
      h("h1","",d.cultureTitle[l]),
      h("p","ihd-culture-lead",d.cultureIntro[l])
    );shell.appendChild(cover);
    const grid=h("div","ihd-values-grid");
    for(const [i,row] of d.rows.entries()){
      const card=h("article","ihd-value-card");
      card.append(h("div","ihd-value-number",String(i+1).padStart(2,"0")),h("h3","",row.label[l]),h("p","",row.text[l]));
      grid.appendChild(card);
    }
    const wrapper=h("div","ihd-culture-container");
    wrapper.append(h("h2","ihd-culture-heading",({zh:"我们的十项企业文化",en:"Ten Guiding Principles",ms:"Sepuluh Prinsip Panduan"})[l]),grid);
    const manifesto=h("section","ihd-manifesto");
    manifesto.append(
      h("div","ihd-culture-eyebrow",d.manifestoTagline[l]),
      h("h2","",d.manifestoTitle[l])
    );
    for(const paragraph of d.manifesto[l])manifesto.appendChild(h("p","",paragraph));
    wrapper.append(manifesto);
    const note=h("details","ihd-review-note");
    note.appendChild(h("summary","",({zh:"给 Steve Ooi 的原文核对说明（点击展开）",en:"Original Signage Verification Notes (expand)",ms:"Nota Semakan Papan Asal (buka)"})[l]));
    note.appendChild(h("p","",d.reviewNote[l]));
    wrapper.append(note);
    const actions=h("div","ihd-culture-actions");
    const back=h("button","button",({zh:"返回品牌故事 →",en:"Back to Our Story →",ms:"Kembali ke Kisah Kami →"})[l]);
    back.onclick=()=>window.page("about");
    actions.appendChild(back);
    wrapper.append(actions);shell.appendChild(wrapper);
  }
  function languageChange(lang){
    if(!["zh","en","ms"].includes(lang))return;
    current=lang;
    try{localStorage.setItem("ihd-review-language",lang)}catch{}
    renderCulture();
    translateDom();
  }
  function attach(){
    // Rendering happens after the original site bootstraps. Keep the existing
    // public demo's booking/WhatsApp code unchanged and isolated.
    const bar=document.querySelector(".top");
    const nav=document.querySelector("#nav");
    if(!bar||!nav)return;
    const lang=h("div","ihd-lang");
    lang.setAttribute("role","group");
    lang.setAttribute("aria-label","Website language / 网站语言 / Bahasa laman web");
    [["zh","中文"],["en","EN"],["ms","BM"]].forEach(([key,text])=>{
      const b=h("button","",text);b.dataset.lang=key;b.type="button";
      b.addEventListener("click",()=>languageChange(key));lang.appendChild(b);
    });
    bar.appendChild(lang);
    const cultureLink=h("button","ihd-culture-nav","Culture");
    cultureLink.dataset.tab="culture";cultureLink.type="button";
    cultureLink.setAttribute("aria-label","Corporate Culture / 企业文化 / Budaya Korporat");
    cultureLink.addEventListener("click",e=>{
      e.preventDefault();
      e.stopPropagation();
      window.page("culture");
    });
    const backendNav=nav.querySelector('[data-tab="studio"]');
    if(backendNav)nav.insertBefore(cultureLink,backendNav);else nav.appendChild(cultureLink);
    const cultureShell=h("section","container ihd-culture-page off");
    cultureShell.id="ihd-culture";
    const footer=document.querySelector(".footer");
    if(footer)footer.before(cultureShell);else document.body.appendChild(cultureShell);
    const homeHero=document.querySelector("#home .hero-copy .flex");
    if(homeHero){
      const cultureCta=h("button","button ihd-culture-hero-cta","Explore Our Culture →");
      cultureCta.type="button";
      cultureCta.addEventListener("click",()=>window.page("culture"));
      homeHero.appendChild(cultureCta);
      T("Explore Our Culture →","探索企业文化 →","Kenali Budaya Kami →","Explore Our Culture →");
    }
    const existingAbout=document.querySelector("#about");
    if(existingAbout){
      const view=h("div","ihd-about-link");
      view.appendChild(h("div","ihd-culture-eyebrow","Official Source · 品牌文化"));
      view.appendChild(h("h2","","Our Corporate Culture & Manifesto"));
      view.appendChild(h("p","","The company's detailed culture and manifesto now belong to internal staff training. Management will approve any public excerpts."));
      const button=h("button","primary","Explore Corporate Culture →");
      button.addEventListener("click",()=>window.page("culture"));
      view.appendChild(button);existingAbout.appendChild(view);
      T("Official Source · 品牌文化","正式品牌理念","Sumber Rasmi · Budaya Korporat","Original Brand Philosophy");
      T("Our Corporate Culture & Manifesto","企业文化与宣言","Budaya Korporat & Manifesto","Corporate Culture & Manifesto");
      T("The founder's original in-salon company philosophy and manifesto are presented in three languages for your review.","企业文化与宣言已归入内训，公开内容将由管理层审核选择。","Budaya korporat dan manifesto kini merupakan bahan latihan dalaman. Sebarang petikan awam memerlukan kelulusan pengurusan.","The detailed corporate culture and manifesto are internal training material; public excerpts require management approval.");
      T("Explore Corporate Culture →","查看企业文化 →","Terokai Budaya Korporat →","View Corporate Culture →");
    }
    const originalPage=window.page;
    window.page=function(key){
      if(key==="culture"){
        originalPage("home");
        document.querySelector("#home")?.classList.add("off");
        document.getElementById("ihd-culture")?.classList.remove("off");
        document.querySelectorAll("#nav button").forEach(b=>b.classList.toggle("active",b.dataset.tab==="culture"));
        window.scrollTo({top:0,behavior:"smooth"});
      }else{
        document.getElementById("ihd-culture")?.classList.add("off");
        originalPage(key);
      }
      requestAnimationFrame(translateDom);
    };
    const saved=(()=>{try{return localStorage.getItem("ihd-review-language")}catch{return null}})();
    current=["zh","en","ms"].includes(saved)?saved:"zh";
    renderCulture();
    translateDom();
    // Original site appends dynamic service cards, booking drafts, CSV previews.
    // Translate new visual text nodes without touching customer input values.
    const observer=new MutationObserver(()=>{
      if(translating||rafPending)return;
      rafPending=true;
      requestAnimationFrame(()=>{rafPending=false;translateDom()});
    });
    observer.observe(document.body,{childList:true,subtree:true});
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",attach,{once:true});else attach();
  window.IHDReviewLanguage={set:languageChange,get:()=>current};
})();
