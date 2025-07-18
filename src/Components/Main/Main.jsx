import React from 'react'

const Main = () => {
  return (
    <main>
        <div className="main-page">
        <div style={{ height: '40px' }}></div>
        <div style={{
            width: '50%',
            minWidth: '430px',
            color: '#555555',
            textAlign: 'left',
            lineHeight: 1.5,
            paddingLeft: '30px',
            wordBreak: 'keep-all'
        }}>
            저는 금융IT전문가로 성장해가고 있는 개발자 박준상입니다. 변화하는 금융 환경과 디지털 기술을 함께 이해하며, 고객과 현장에 도움이 되는 실질적인 IT 역량을 쌓아가고 있습니다. 앞으로도 꾸준한 학습과 도전을 통해 더 나은 금융 서비스를 만드는 전문가로 성장하겠습니다.
            <br /><br />
            <div style={{ textAlign: 'right', fontWeight: 'bold' }}>
            - J.S. Park, IT Developer
            </div>
        </div>
        <div style={{ height: '40px' }}></div>

        <div id="about-me" className="context-block">
            <div className="subtitle-wrapper">
            <hr className="divider" style={{ borderTop: '1px solid black' }} />
            <div className="subtitle">
                <span className="kor"> 소개 </span>
                <span className="eng"> About me </span>
            </div>
            <hr className="divider" style={{ borderTop: '1px solid #e5e7eb' }} />
            </div>
            <div className="context-wrapper">
            <div className="image-wrapper">
                <img
                className="image"
                style={{ borderRadius: '50%', margin: '20px' }}
                src="images/me.webp"
                alt="증명 사진"
                />
            </div>
            <div className="text">
                <span className="text-title">
                <span className="kor"> 학력 </span>
                <span className="eng"> Education </span>
                </span>
                <br />
                <span className="kor"> 전북대학교 컴퓨터공학부 (2019.03 ~ 2025.08) </span>
                <br />
                <span className="eng"> Jeonbuk National University Computer Science and Engineering </span>
                <br /><br />

                <span className="text-title">
                <span className="kor"> 어학 </span>
                <span className="eng"> Languages </span>
                </span>
                <br />
                <span className="kor"> 토익 805 </span>
                <br />
                <span className="eng"> Toiec </span>
                <br />
                <span className="kor"> 토익 스피킹 AL(Advanced Low) </span>
                <br />
                <span className="eng"> Toiec Speaking </span>
                <br /><br />

                <span className="text-title">
                <span className="kor"> 자격증 </span>
                <span className="eng"> Certifications </span>
                </span>
                <br />
                <span className="kor"> SQLD </span>
                <br />
                <span className="eng"> SQL Developer </span>
                <br /><br />

                <span className="text-title">
                <span className="kor"> 기술 </span>
                <span className="eng"> Stack </span>
                </span>
                <br />
                <span>
                <img style={{ width: 'auto', height: '40px', paddingRight: '5px' }} src="images/html5-icon.webp" alt="HTML 아이콘" />
                <img style={{ width: 'auto', height: '40px', paddingRight: '5px' }} src="images/css-icon.webp" alt="CSS 아이콘" />
                <img style={{ width: 'auto', height: '40px', paddingRight: '5px' }} src="images/js-icon.webp" alt="Javascript 아이콘" />
                <img style={{ width: 'auto', height: '40px', paddingRight: '5px' }} src="images/kotlin-icon.webp" alt="Kotlin 아이콘" />
                <img style={{ width: 'auto', height: '40px', paddingRight: '5px' }} src="images/mysql-icon.webp" alt="MySql 아이콘" />
                </span>
                <br />
            </div>
            </div>
        </div>

        <div style={{ height: '100px' }}></div>

        <div id="activity" className="context-block">
            <div className="subtitle-wrapper">
                <hr className="divider" style={{ borderTop: "1px solid black" }} />
                <div className="subtitle">
                <span className="kor">활동</span>
                <span className="eng">Activity</span>
                </div>
                <hr className="divider" style={{ borderTop: "1px solid #e5e7eb" }} />
            </div>

            <div className="context-wrapper">
                <div className="image-wrapper">
                <img className="image" src="images/sori-angel.webp" alt="소리천사 활동 사진" />
                </div>
                <div className="text">
                <span className="text-title">2019 전주세계소리축제 자원활동가 소리천사</span>
                <span className="text-subtitle" style={{ marginLeft: 10 }}>2019.기억안남 ~ 2019.기억안남</span>
                <br />
                <span>
                    2019년 전주세계소리축제에서 ‘소리천사’ 자원활동가로 참여했습니다.
                    어린이소리축제에서 어린이 체험 부스를 운영하며 행사 진행을 도왔고, 관람객 안내와 안전 관리도 맡았습니다.

                    축제 기간 동안 다양한 사람들과 소통하고 팀원들과 협력하는 과정에서 협동심을 기를 수 있었습니다.
                    특히, 현장에서 예상치 못한 상황이 생길 때마다 동료들과 빠르게 의견을 나누고 유연하게 대처했던 경험이 기억에 남습니다.

                    행사 준비부터 마무리까지 모두가 함께 힘을 합쳐 만들어가는 현장의 분위기를 직접 경험할 수 있었습니다.
                    이런 활동 경험이 앞으로 다양한 프로젝트를 할 때에도 좋은 밑거름이 될 것이라 생각합니다.
                </span>
                </div>
            </div>

            <div style={{ height: "150px" }}></div>

            <div className="context-wrapper">
                <div className="image-wrapper">
                <img className="image" src="images/friends-image.webp" alt="ADOGS 유기견 쉼터 봉사 활동 사진" />
                </div>
                <div className="text">
                <span className="text-title">ADOGS 유기견 쉼터 봉사활동</span>
                <span className="text-subtitle" style={{ marginLeft: 10 }}>2024.12 ~ 2025.01</span>
                <br />
                <span>
                    네모난 침대에서 일어나 눈을 떠보면 네모난 창문으로 보이는 똑같은 풍경 네모난 문을 열고 네모난 테이블에 앉아 네모난 스마트폰 본 뒤
                    네모난 책가방에 네모난 책들을 넣고 네모난 버스를 타고 네모난 건물지나 네모난 학교에 들어서면 또 네모난 교실 네모난 칠판과 책상들
                    네모난 오디오 네모난 컴퓨터 TV 네모난 달력에 그려진 똑같은 하루를 의식도 못한 채로 그냥 숨만 쉬고 있는 걸
                    주윌 둘러보면 모두 네모난 것들뿐인데 우린 언제나 듣지 잘난 어른의 멋진 이 말 세상은 둥글게 살아야 해 지구본을 보면 우리 사는 지군 둥근데 부속품들은 왜 다 온통 네모난 건지 몰라 어쩌면 그건 네모의 꿈일지 몰라
                </span>
                </div>
            </div>

            <div style={{ height: "150px" }}></div>

            <div className="context-wrapper">
                <div className="image-wrapper">
                <img className="image" src="images/carebank-icon.webp" alt="케어뱅크 서포터즈 활동 사진" />
                </div>
                <div className="text">
                <span className="text-title">케어뱅크 보미 서포터즈 2기</span>
                <span className="text-subtitle" style={{ marginLeft: 10 }}>2025.06 ~ 2025.10</span>
                <br />
                <span>
                    네모난 침대에서 일어나 눈을 떠보면 네모난 창문으로 보이는 똑같은 풍경 네모난 문을 열고 네모난 테이블에 앉아 네모난 스마트폰 본 뒤
                    네모난 책가방에 네모난 책들을 넣고 네모난 버스를 타고 네모난 건물지나 네모난 학교에 들어서면 또 네모난 교실 네모난 칠판과 책상들
                    네모난 오디오 네모난 컴퓨터 TV 네모난 달력에 그려진 똑같은 하루를 의식도 못한 채로 그냥 숨만 쉬고 있는 걸
                    주윌 둘러보면 모두 네모난 것들뿐인데 우린 언제나 듣지 잘난 어른의 멋진 이 말 세상은 둥글게 살아야 해 지구본을 보면 우리 사는 지군 둥근데 부속품들은 왜 다 온통 네모난 건지 몰라 어쩌면 그건 네모의 꿈일지 몰라
                </span>
                </div>
            </div>

            <div style={{ height: "150px" }}></div>

            <div className="context-wrapper">
                <div className="image-wrapper">
                <img className="image" src="images/woorifisa-image.webp" alt="우리FIS 아카데미 활동 사진" />
                </div>
                <div className="text">
                <span className="text-title">우리FIS 아카데미 5기 클라우드 서비스 개발</span>
                <span className="text-subtitle" style={{ marginLeft: 10 }}>2025.07 ~ 2025.12</span>
                <br />
                <span>
                    네모난 침대에서 일어나 눈을 떠보면 네모난 창문으로 보이는 똑같은 풍경 네모난 문을 열고 네모난 테이블에 앉아 네모난 스마트폰 본 뒤
                    네모난 책가방에 네모난 책들을 넣고 네모난 버스를 타고 네모난 건물지나 네모난 학교에 들어서면 또 네모난 교실 네모난 칠판과 책상들
                    네모난 오디오 네모난 컴퓨터 TV 네모난 달력에 그려진 똑같은 하루를 의식도 못한 채로 그냥 숨만 쉬고 있는 걸
                    주윌 둘러보면 모두 네모난 것들뿐인데 우린 언제나 듣지 잘난 어른의 멋진 이 말 세상은 둥글게 살아야 해 지구본을 보면 우리 사는 지군 둥근데 부속품들은 왜 다 온통 네모난 건지 몰라 어쩌면 그건 네모의 꿈일지 몰라
                </span>
                </div>
            </div>
            </div>
        </div>

        <div style={{ height: '100px' }}></div>

        <div id="project" className="context-block">
            <div className="subtitle-wrapper">
                <hr className="divider" style={{ borderTop: "1px solid black" }} />
                <div className="subtitle">
                <span className="kor">프로젝트</span>
                <span className="eng">Project</span>
                </div>
                <hr className="divider" style={{ borderTop: "1px solid #e5e7eb" }} />
            </div>

            <div className="context-wrapper">
                <div className="image-wrapper">
                <img className="image" src="images/jjeck-icon.webp" alt="프로젝트 JJECK 아이콘" />
                </div>
                <div className="text">
                <span className="text-title">JJECK</span>
                <span className="text-subtitle" style={{ marginLeft: 10 }}>전주시 식당, 숙박업소 정보 4개 국어 번역 모바일 서비스</span>
                <br />
                <span>
                    네모난 침대에서 일어나 눈을 떠보면 네모난 창문으로 보이는 똑같은 풍경 네모난 문을 열고 네모난 테이블에 앉아 네모난 스마트폰 본 뒤
                    네모난 책가방에 네모난 책들을 넣고 네모난 버스를 타고 네모난 건물지나 네모난 학교에 들어서면 또 네모난 교실 네모난 칠판과 책상들
                    네모난 오디오 네모난 컴퓨터 TV 네모난 달력에 그려진 똑같은 하루를 의식도 못한 채로 그냥 숨만 쉬고 있는 걸
                    주윌 둘러보면 모두 네모난 것들뿐인데 우린 언제나 듣지 잘난 어른의 멋진 이 말 세상은 둥글게 살아야 해 지구본을 보면 우리 사는 지군 둥근데 부속품들은 왜 다 온통 네모난 건지 몰라 어쩌면 그건 네모의 꿈일지 몰라
                </span>
                </div>
            </div>

            <div className="context-wrapper">
                <div className="image-wrapper">
                <img className="image" src="images/simpyo-icon.webp" alt="프로젝트 쉼표 아이콘" />
                </div>
                <div className="text">
                <span className="text-title">쉼표</span>
                <span className="text-subtitle" style={{ marginLeft: 10 }}>서울시 무료 쉼터 정보 제공 모바일 서비스</span>
                <br />
                <span>
                    네모난 침대에서 일어나 눈을 떠보면 네모난 창문으로 보이는 똑같은 풍경 네모난 문을 열고 네모난 테이블에 앉아 네모난 스마트폰 본 뒤
                    네모난 책가방에 네모난 책들을 넣고 네모난 버스를 타고 네모난 건물지나 네모난 학교에 들어서면 또 네모난 교실 네모난 칠판과 책상들
                    네모난 오디오 네모난 컴퓨터 TV 네모난 달력에 그려진 똑같은 하루를 의식도 못한 채로 그냥 숨만 쉬고 있는 걸
                    주윌 둘러보면 모두 네모난 것들뿐인데 우린 언제나 듣지 잘난 어른의 멋진 이 말 세상은 둥글게 살아야 해 지구본을 보면 우리 사는 지군 둥근데 부속품들은 왜 다 온통 네모난 건지 몰라 어쩌면 그건 네모의 꿈일지 몰라
                </span>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Main