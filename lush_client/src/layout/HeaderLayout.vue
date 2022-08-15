<template>
  <div class="header-container">
    <div class="header-inner">
      <!-- mobile -->
      <div class="icon-area mobile-btn-area">
        <button class="btn menu-open">
          <span>모바일 메뉴 열기</span>
        </button>
        <button class="btn menu-close">
          <span> 모바일 메뉴 닫기 </span>
        </button>
      </div>
      <!-- logo -->
      <h1 class="logo">
        <a @click="gotoHome()"
          ><img src="@/assets/icons/logo.png" alt="logo"
        /></a>
      </h1>
      <!-- nav -->
      <nav>
        <ul class="gnb">
          <li class="gnb-list">
            <a class="main_title">제품</a>
            <div class="sub-menu">
              <ul class="sub-menu-inner">
                <li>
                  <a class="sub-title">베스트</a>
                  <ul>
                    <li><a>주간베스트</a></li>
                    <li><a>별다섯개후기</a></li>
                    <li><a>온라인전용</a></li>
                    <li><a>국내제조</a></li>
                  </ul>
                </li>

                <li>
                  <a class="sub-title">신제품</a>
                  <ul>
                    <li><a>보디스프레이</a></li>
                    <li><a>버블바큐레이션</a></li>
                    <li><a>이스터</a></li>
                    <li><a>스프링컬렉션</a></li>
                    <li><a>마더스&파더스</a></li>
                  </ul>
                </li>
                <li>
                  <a class="sub-title">배쓰</a>
                  <ul>
                    <li><a>배쓰밤</a></li>
                    <li><a>버블바</a></li>
                    <li><a>펀</a></li>
                    <li><a>젤리밤</a></li>
                  </ul>
                </li>
                <li>
                  <a class="sub-title">샤워</a>
                  <ul>
                    <li><a>솝</a></li>
                    <li><a>샤워젤&젤리</a></li>
                    <li><a>보디컨디셔너</a></li>
                    <li><a>샤워오일</a></li>
                    <li><a>샤워밤</a></li>
                  </ul>
                </li>
                <li>
                  <a class="sub-title">보디</a>
                  <ul>
                    <li><a>클렌저</a></li>
                    <li><a>로션</a></li>
                    <li><a>핸드앤풋</a></li>
                    <li><a>마사지바</a></li>
                    <li><a>더스팅파우더</a></li>
                    <li><a>쉐이빙크림</a></li>
                    <li><a>스파클바</a></li>
                  </ul>
                </li>
                <li>
                  <a class="sub-title">페이스</a>
                  <ul>
                    <li><a>클렌저</a></li>
                    <li><a>페이스마스크</a></li>
                    <li><a>젤리마스크</a></li>
                    <li><a>토너</a></li>
                    <li><a>모이스춰라이저</a></li>
                    <li><a>프라이머</a></li>
                    <li><a>립</a></li>
                    <li><a>쉐이빙크림</a></li>
                  </ul>
                </li>
                <li>
                  <a class="sub-title">헤어</a>
                  <ul>
                    <li><a>샴푸바</a></li>
                    <li><a>샴푸</a></li>
                    <li><a>드라이샴푸</a></li>
                    <li><a>컨디셔너</a></li>
                    <li><a>트리트먼트</a></li>
                    <li><a>스타일링</a></li>
                  </ul>
                </li>
                <li>
                  <a class="sub-title">메이크업</a>
                  <ul>
                    <li><a>페이스파우더</a></li>
                    <li><a>아이메이크업</a></li>
                    <li><a>파운데이션</a></li>
                    <li><a>스킨틴트</a></li>
                    <li><a>비건브러쉬</a></li>
                  </ul>
                </li>
                <li>
                  <a class="sub-title">퍼퓸</a>
                  <ul>
                    <li><a>보디스프레이</a></li>
                    <li><a>퍼퓸라이브러리</a></li>
                    <li><a>코어레인지</a></li>
                    <li><a>솔리드퍼퓸</a></li>
                    <li><a>위시카드</a></li>
                    <li><a>퍼퓸낫랩</a></li>
                  </ul>
                </li>
                <li>
                  <a class="sub-title">기프트</a>
                  <ul>
                    <li><a>기프트베스트</a></li>
                    <li><a>1-3만원대</a></li>
                    <li><a>4-6만원대</a></li>
                    <li><a>7만원이상</a></li>
                    <li><a>낫랩</a></li>
                    <li><a>스웨그</a></li>
                    <li><a>악세서리</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </li>
          <li class="gnb-list">
            <a class="main_title">브랜드</a>
            <div class="sub-menu">
              <ul class="sub-menu-inner type2">
                <li><a class="sub-title">러쉬 About lush</a></li>
                <li><a class="sub-title">채러티팟</a></li>
              </ul>
            </div>
          </li>
          <li class="gnb-list"><a class="main_title">매장</a></li>
          <li class="gnb-list"><a class="main_title">스파</a></li>
          <li class="gnb-list"><a class="main_title">이벤트</a></li>
        </ul>
      </nav>

      <!-- icon area -->
      <div class="icon-area">
        <div class="icon-btn-area">
          <p class="btn-area">
            <button type="button" class="btn btn-search-open">
              <span>검색창 열기</span>
            </button>
          </p>
          <p class="btn-area">
            <button type="button" class="btn btn-bag">
              <span>상품 담기</span>
            </button>
          </p>
          <p class="btn-area">
            <button type="button" class="btn btn-user">
              <span>유저</span>
            </button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    gotoHome() {
      alert(1);
    },
  },
};
</script>

<style lang="scss" scoped>
.logo {
  cursor: pointer;
}
.header-container {
  position: relative;
  width: 100%;
  height: 10rem;
  background-color: #000;
  .header-inner {
    display: flex;
    align-items: center;
    margin: 0 auto;
    max-width: 102.4rem;
    padding: 0 2rem;
    height: 100%;
  }

  .gnb {
    display: flex;
    margin-left: 7rem;
    width: 46rem;
    max-width: 46rem;
    color: #fff;

    .gnb-list {
      display: flex;
      align-content: center;
      justify-content: center;
      flex-basis: 25%;
      height: 100%;
      cursor: pointer;
      .main_title {
        display: inline-block;
        font-size: 1.6rem;
        color: #fff;
        &:hover {
          color: rgb(0, 158, 37);
        }
      }
    }
  }

  .sub-menu {
    position: absolute;
    top: 10rem;
    left: 0;
    z-index: 3;
    background-color: #fff;
    width: 100%;
    color: #000;

    .sub-menu-inner {
      position: relative;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      margin: 0 auto;
      padding: 2.4rem 2rem 3rem 2rem;
      width: 102.4rem;
      max-width: 102.4rem;
      box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.1);
      .sub-title {
        font-size: 16px;
        color: #222;
        margin-bottom: 1rem;
        font-weight: 700;
        &:hover {
          color: rgb(0, 158, 37);
        }
      }
      > li {
        > ul {
          > li {
            a {
              font-size: 14px;
              color: #535353;
              line-height: 2rem;
              padding: 6px 0;
              letter-spacing: -0.34px;
              &:hover {
                color: rgb(0, 158, 37);
              }
            }
          }
        }
      }
      &.type2 {
        display: flex;
        justify-content: flex-start;
        height: 100px;
        > li {
          &:first-child {
            width: 12rem;
            margin-right: 3.2rem;
          }
        }
      }
    }
  }

  .icon-area {
    margin-left: auto;
    .btn {
      margin-left: 2rem;
    }
  }
  .mobile-btn-area {
    display: none;
    position: relative;
    width: 3rem;
    height: 3rem;
    margin-right: 1rem;
    .menu-open {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      margin-left: 0;
      width: 3rem;
      height: 3rem;
      background: url("@/assets/icons/hamburger_ic.png") no-repeat center;
    }
  }
}
</style>
