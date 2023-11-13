// const express = require("express") ;  옛날 즉 commonjs 방식
import express from "express"; // 현대 방식 module 방식
import cors from "cors";
//도움말 및 기능 테스트 Swagger
import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import { options } from "./swagger/config.js";

const app = express();
const port = 4000; // 서버에 접속시 포트번호
// cors 처리(웹브라우저로 접속시 보안관련 처리)
app.use(
  cors({
    origin: "*",
  })
);

// json 데이터를 사용하겠다고 설정
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const swaggerSpec = swaggerJsDoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// REST API 요청 처리
// 첫페이지
app.get("/", function (req, res) {
  res.send("인터파크 API");
});
// 게시판 API (백엔드 호출 함수)
// get 은 프론트에서 자료 요청
// localhost:4000/board : 게시판 자료를 요청.
app.get("/board", (req, res) => {
  console.log("GET", req);
  // DB 에서 조건을 보고 결과를 {} 만들어서 [] 담아서준다.
  // MongoDB, MaraiDB(MySql)
  const result = [
    {
      number: 1,
      writer: "철수",
      title: "제목입니다.",
      contents: "내용입니다.",
    },
    {
      number: 2,
      writer: "영희",
      title: "영희입니다.",
      contents: "내용입니다.",
    },
    {
      number: 3,
      writer: "훈희",
      title: "훈희입니다.",
      contents: "내용입니다.",
    },
  ];
  res.send(result);
});

// post 는 프론트에서 백엔드로 자료 전송
// localhost:4000/board : 게시판 자료를 추가한다.
// axios.post("/board", {자료})
app.post("/board", (req, res) => {
  // console.log("POST", req);
  console.log("BODY 프론트가 보낸 데이터 ", req.body);
  // req.body 를 바탕으로 DB 에 내용 추가
  res.send("게시물 추가에 성공하였습니다.");
});

// 인터파크 API (백엔드 호출 함수)
// visual 영역에 출력할 자료 요청
// localhost:4000/visual
app.get("/visual", (req, res) => {
  const result = {
    total: 6,
    visual_1: {
      file: "images/v1.png",
      url: "a.html",
    },
    visual_2: {
      file: "images/v2.jpg",
      url: "b.html",
    },
    visual_3: {
      file: "images/v3.jpg",
      url: "c.html",
    },
    visual_4: {
      file: "images/v4.jpg",
      url: "d.html",
    },
    visual_5: {
      file: "images/v5.jpg",
      url: "e.html",
    },
    visual_6: {
      file: "images/v6.png",
      url: "f.html",
    },
  };
  res.send(result);
});
// recommend 영역에 출력할 자료 요청
// localhost:4000/visual
app.get("/recommend", (req, res) => {
  const result = {
    total: 12,
    good_1: {
      image: "images/r1.jpg",
      discount: "24",
      price: "7500",
      desc: "[스포츠파크]  노스페이스 겨울 구스다운 패딩 슬립온 NS93M50",
      url: "a.html",
    },
    good_2: {
      image: "images/r2.jpg",
      discount: "38",
      price: "12500",
      desc: "서울우유 멸균 초코/딸기/흰우유 24팩/48팩 외",
      url: "a.html",
    },
    good_3: {
      image: "images/r3.jpg",
      discount: "",
      price: "15500",
      desc: "[최종가 10,850원] 17~18브릭스 미니 꿀사과 엔비사과 2kg (5-9과/가정용/펜시등급)",
      url: "a.html",
    },
    good_4: {
      image: "images/r4.png",
      discount: "22",
      price: "6900",
      desc: "[I*POP] 아이팝 스파클링 워터 플레인 / 아이팝 탄산수 / 강탄산 / 진짜 먹는 샘물로 만든 탄산수",
      url: "a.html",
    },
    good_5: {
      image: "images/r5.jpg",
      discount: "24",
      price: "7820",
      desc: "큐라이프 니트릴장갑 200매 (색상 블랙, 화이트 / 사이즈 S, M, L 선택)",
      url: "a.html",
    },
    good_6: {
      image: "images/r6.jpg",
      discount: "22",
      price: "26000",
      desc: "아모스 04 스타일 컬링 2X 에센스 150ml",
      url: "a.html",
    },
    good_7: {
      image: "images/r7.jpg",
      discount: "52",
      price: "32900",
      desc: "[김혜자 세제] 프로쉬 공식몰 독일 식기세척기세제 그린레몬 50개입 2개+주방세제 1개+펌프 1개 증정",
      url: "a.html",
    },
    good_8: {
      image: "images/r8.jpg",
      discount: "25",
      price: "10410",
      desc: "제주 삼다수 2L 12병 (유/무라벨 랜덤발송)",
      url: "a.html",
    },
    good_9: {
      image: "images/r9.png",
      discount: "2",
      price: "8240",
      desc: "단하루! 베베숲 센시티브 20매 휴대 캡 12팩외 휴대용 아기 물티슈 모음/ 외출 필수품.",
      url: "a.html",
    },
    good_10: {
      image: "images/r10.jpg",
      discount: "29",
      price: "34900",
      desc: "[스포츠파크] 뉴발란스 남성 UNI 에센셜 스물로고 맨투맨 4종택1",
      url: "a.html",
    },
    good_11: {
      image: "images/r11.jpg",
      discount: 13,
      price: "18260",
      desc: "샤오미 미지아 가습기2/미지아 스마트 살균가습기2/MJJSQ06DY/관부가세포함",
      url: "a.html",
    },
    good_12: {
      url: "go.html",
    },
  };
  res.send(result);
});

// tour 영역에 출력할 자료 요청
app.get("/tour", (req, res) => {
  const result = {
    total: 9,

    good_1: {
      image: "images/t1.jpg",
      badge: "강력특가",
      desc: "패밀리 투룸 로프트(21평)",
      sub: "어반스테이 여수웅천",
      price: "63900",
      url: "a.html",
    },

    good_2: {
      image: "images/t2.jpg",
      badge: "국적기직항",
      desc: "대한항공,베스트셀러",
      sub: "동유럽 3국9일, 체코/오스트리아/헝가리/대한항공,4성호",
      price: "2599000",
      url: "a.html",
    },

    good_3: {
      image: "images/t3.jpg",
      badge: "강력특가",
      desc: "클래식 킹",
      sub: "레스케이프 호텔",
      price: "220000",
      url: "a.html",
    },

    good_4: {
      image: "images/t4.webp",
      badge: "괌",
      desc: "공항10분 거리, 오션뷰 인피니티 풀",
      sub: "괌 리프 호텔 (구.괌 리프 앤 올리브 스파 리조트)",
      price: "219120",
      url: "a.html",
    },

    good_5: {
      image: "images/t5.jpg",
      badge: "BEST",
      desc: "토트넘VS울버햄튼 경기 티켓 포함",
      sub: "[런덤Pack] 찐 런던& 토트넘 직관 경기_6박8일",
      price: "5490000",
      url: "a.html",
    },

    good_6: {
      image: "images/t6.jpg",
      badge: "강력특가",
      desc: "스탠다드 더블",
      sub: "글래드 여의도",
      price: "139040",
      url: "a.html",
    },

    good_7: {
      image: "images/t7.webp",
      badge: "홍콩",
      desc: "홍콩 하버뷰 갓성비 호텔",
      sub: "이비스 홍콩 센트럴 & 셩완",
      price: "151817",
      url: "a.html",
    },

    good_8: {
      image: "images/t8.jpg",
      badge: "베스트셀러",
      desc: "최대판매 상품",
      sub: "[부산-하노이 5일] ★가족여행최고★하노이/하롱베이",
      price: "679000",
      url: "a.html",
    },

    good_9: {
      image: "images/t9.jpg",
      badge: "히트상품",
      desc: "사이판 최대 워터파크 웨이브정글 이용가능",
      sub: "사이판 월드리조트_골드카드_티웨이항공",
      price: "1069000",
      url: "a.html",
    },
  };
  res.send(result);
});

// ticket 영역에 출력할 자료 요청
app.get("/ticket", (req, res) => {
  const result = {
    total: 8,

    good_1: {
      image: "images/t1.gif",
      rank: "1",
      class: "ticket-badge-blue",
      badge: "좌석우위",
      tit: "태양의서커스 <루치아>",
      place: "잠실종합운동장 내 빅탑",
      date: "2023.10.25~ 2023.12.31",
      url: "a.html",
    },

    good_2: {
      image: "images/t2.gif",
      rank: "2",
      class: "ticket-badge-none",
      badge: "",
      tit: "뮤지컬 <몬테크리스토>",
      place: "충무아트센터 대극장",
      date: "2023.11.21 ~ 2024.02.25",
      url: "a.html",
    },

    good_3: {
      image: "images/t3.gif",
      rank: "3",
      class: "ticket-badge-red",
      badge: "단독판매",
      tit: "뮤지컬 <블랙메리포핀스>",
      place: "서경대학교 공연예술센터 스콘1관",
      date: "2023.09.21 ~ 2023.12.03",
      url: "a.html",
    },

    good_4: {
      image: "images/t4.gif",
      rank: "4",
      class: "ticket-badge-blue",
      badge: "좌석우위",
      tit: "뮤지컬 <레베카> 10주년 기념공연",
      place: "블루스퀘어 신한카드홀",
      date: "2023.08.19 ~ 2023.11.19",
      url: "a.html",
    },

    good_5: {
      image: "images/t5.gif",
      rank: "5",
      class: "ticket-badge-red",
      badge: "단독판매",
      tit: "뮤지컬<레미제라블>",
      place: "블루스퀘어 신한카드홀",
      date: "2023.11.30 ~ 2024.03.10",
      url: "a.html",
    },

    good_6: {
      image: "images/t6.gif",
      rank: "6",
      class: "ticket-badge-red",
      badge: "단독판매",
      tit: "뮤지컬<렌트>",
      place: "coex 신한카드 artium",
      date: "2023.11.11 ~ 2024.02.25",
      url: "a.html",
    },

    good_7: {
      image: "images/t7.gif",
      rank: "7",
      class: "ticket-badge-blue",
      badge: "좌석우위",
      tit: "태양의서커스 <루치아> - 부산",
      place: "신세계 센텀시티 내 빅탑",
      date: "2024.01.13 ~ 2024.02.04",
      url: "a.html",
    },

    good_8: {
      url: "go.html",
    },
  };
  res.send(result);
});

// live 영역에 출력할 자료 요청
app.get("/live", (req, res) => {
  const result = {
    total: 8,
    good_1: {
      image: "images/l1.jpg",
      badge: "방송예정",
      name: "[에듀트립] 글로벌 캠프 첫방 기념 최초 할인! 채팅 참여만 해도 경품 추첨",
      date: "11월 08일 (수)",
      time: "11:00",
      url: "a.html",
      ig_class: "live-product-img",
      good_image: "images/lp1.png",
      good_tittle: "새로운 여행, 컨셉 트립 기획전",
      good_discount: "",
      good_price: "",
      good_url: "a.html",
    },
    good_2: {
      image: "images/l2.png",
      badge: "방송예정",
      name: "제주 자연 속에서 즐기는 온전한 쉼 ✨ 파르나스 호텔 제주",
      date: "11월 23일 (목)",
      time: "19:00",
      url: "a.html",
      good_image: "",
      good_tittle: "",
      good_discount: "",
      good_price: "",
      good_url: "a.html",
    },
    good_3: {
      image: "images/l3.png",
      badge: "VOD",
      name: "네스트호텔 최대 73% 라이브특가",
      date: "",
      time: "",
      url: "a.html",
      ig_class: "live-product-img",
      good_image: "images/lp3.jpg",
      good_tittle: "네스트호텔 라이브 구매하러 가기!",
      good_discount: "73",
      good_price: "125100",
      good_url: "a.html",
    },
    good_4: {
      image: "images/l4.jpg",
      badge: "VOD",
      name: "[나트랑] 스완도르 올인클루시브 5일 70만원대~",
      date: "",
      time: "",
      url: "a.html",
      ig_class: "live-product-img",
      good_image: "images/lp4.png",
      good_tittle: "[카쇼라X스완도르 리조트] 올인클루시브 나트랑 3박 5일",
      good_discount: "",
      good_price: "749000",
      good_url: "a.html",
    },
    good_5: {
      image: "images/l5.jpg",
      badge: "VOD",
      name: "전라도 특집 여수/전주/광주",
      date: "",
      time: "",
      url: "a.html",
      ig_class: "live-product-img",
      good_image: "images/lp5.jpg",
      good_tittle: "히든베이 호텔",
      good_discount: "81",
      good_price: "84950",
      good_url: "a.html",
    },
    good_6: {
      image: "images/l6.jpg",
      badge: "VOD",
      name: "진에어 동계 잔여석 & 3월 출발 단독 특가! 방송 중에만 제휴카드로 결제시 15% 추가 할인 🎁",
      date: "",
      time: "",
      url: "a.html",
      ig_class: "live-product-img",
      good_image: "images/lp6.jpg",
      good_tittle: "[실시간 항공권] 인천 ↔ 오사카",
      good_discount: "73",
      good_price: "217900",
      good_url: "a.html",
    },
    good_7: {
      image: "images/l7.jpg",
      badge: "VOD",
      name: "용평리조트 최대 85% 라이브 특가! 7만원대~",
      date: "",
      time: "",
      url: "a.html",
      ig_class: "live-product-img",
      good_image: "images/lp7.jpg",
      good_tittle: "용평리조트",
      good_discount: "80",
      good_price: "72000",
      good_url: "a.html",
    },
    good_8: {
      image: "images/l8.jpg",
      badge: "VOD",
      name: "[이달의 여행] 코타키나발루 특가를 다 모았다!",
      date: "",
      time: "",
      url: "a.html",
      ig_class: "live-product-img",
      good_image: "images/lp8.png",
      good_tittle: "[이달의 여행] 코타키나발루 특가모음🎉",
      good_discount: "",
      good_price: "",
      good_url: "a.html",
    },
  };
  res.send(result);
});

// book 영역에 출력할 자료 요청
app.get("/book", (req, res) => {
  const result = {
    total: 10,
    good_1: {
      image: "images/b1.jpg",
      desc: "물리박사 김상욱의 수상한 연구실",
      price: "12,500",
      url: "a.html",
    },
    good_2: {
      image: "images/b2.jpg",
      desc: "도시와 그 불확실한 벽",
      price: "17,550",
      url: "a.html",
    },
    good_3: {
      image: "images/b3.jpg",
      desc: "세계지도를 펼치면 돈의 흐름이 보인다",
      price: "17,820",
      url: "a.html",
    },
    good_4: {
      image: "images/b4.jpg",
      desc: "마시지 않을 수 없는 밤이니까요",
      price: "15,300",
      url: "a.html",
    },
    good_5: {
      image: "images/b5.jpg",
      desc: "세븐틴 헤븐 캐럿한 앨범 세븐틴스 11...",
      price: "12,300",
      url: "a.html",
    },
    good_6: {
      image: "images/b6.jpg",
      desc: "야나두키즈 12개월 통합이용권 ",
      price: "103,550",
      url: "a.html",
    },
    good_7: {
      image: "images/b7.jpg",
      desc: "죽어나간 시간을 위한 애도",
      price: "16,020",
      url: "a.html",
    },
    good_8: {
      image: "images/b8.jpg",
      desc: "생각이 너무 많은 어른을 위한 심리학",
      price: "16,020",
      url: "a.html",
    },
    good_9: {
      image: "images/b9.png",
      desc: "야나두키즈1년통합이용권+영어전집..",
      price: "160,550",
      url: "a.html",
    },
    good_10: {
      image: "images/b10.jpg",
      desc: "기적의 자세요정",
      price: "19,800",
      url: "a.html",
    },
  };
  res.send(result);
});

// event 영역에 출력할 자료 요청
app.get("/event", (req, res) => {
  const result = {
    total: 16,
    good_1: {
      image: "images/e1.jpg",
      url: "a.html",
    },
    good_2: {
      image: "images/e2.jpg",
      url: "a.html",
    },
    good_3: {
      image: "images/e3.jpg",
      url: "a.html",
    },
    good_4: {
      image: "images/e4.jpg",
      url: "a.html",
    },
    good_5: {
      image: "images/e5.jpg",
      url: "a.html",
    },
    good_6: {
      image: "images/e6.jpg",
      url: "a.html",
    },
    good_7: {
      image: "images/e7.png",
      url: "a.html",
    },
    good_8: {
      image: "images/e8.jpg",
      url: "a.html",
    },
    good_9: {
      image: "images/e9.jpg",
      url: "a.html",
    },
    good_10: {
      image: "images/e10.jpg",
      url: "a.html",
    },
    good_11: {
      image: "images/e11.jpg",
      url: "a.html",
    },
    good_12: {
      image: "images/e12.jpg",
      url: "a.html",
    },
    good_13: {
      image: "images/e13.png",
      url: "a.html",
    },
    good_14: {
      image: "images/e14.jpg",
      url: "a.html",
    },
    good_15: {
      image: "images/e15.jpg",
      url: "a.html",
    },
    good_16: {
      image: "images/e16.jpg",
      url: "a.html",
    },
  };
  res.send(result);
});
// 서버에서 Request 요청대기
app.listen(port, () => {
  console.log(`현재 웹서버가 ${port} 로 접속하였습니다.`);
});
