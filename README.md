# 성능 개선 전(V2)
## light house
Performance    99

Accessibility  80

Best Pratices  100

SEO            82


## page speed
Performance    72

Accessibility  80

Best Pratices  100

SEO            82

# TODO
이미지에 alt 속성 추가

웹폰트 "preload"로 처리

자바스크립트 defer 처리

이미지 사이즈 최적화, 확장자 변경(현재는 .png)

# 성능 개선 과정
### 1. 모든 이미지 태그에 alt 속성을 추가

light house: Performance 99 -> 98, Accessibility 80 -> 92, SEO -> 82 -> 91

page speed: Performance 72 -> 68, Accessibility 80 -> 92 , SEO -> 82 -> 91


### 2. 웹폰트 rel="styleshhet"에서 rel="preload"로 변경

눈에 띄는 성능 차이는 없다

### 3. script defer 처리

light house: 그대로

page speed: Performance 68 -> 99


### 3. 이미지 png -> webp 로 변환

page speed 기준: LCP 3.7초 -> 0.9초


# 성능 개선(V3)