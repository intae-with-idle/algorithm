# R고리즘 스터디

- 2022년 11월 25일 부터 가보자고~!

## 👨‍👨‍👦 멤버

<br/>
<table>
  <tr>
    <td  style="border-color: dodgerblue; border-top-right-radius: 8px;  border-top-left-radius: 8px;"  height="140px" align="center"> <a href="https://github.com/jjongtaeng"><img src="https://avatars.githubusercontent.com/u/63296903?v=4" width="200px" /><br/></a></td>
    <td  style="border-color: dodgerblue; border-top-right-radius: 8px;  border-top-left-radius: 8px;"  height="140px" align="center"> <a href="https://github.com/bighk95"><img src="https://avatars.githubusercontent.com/u/117927349?v=4" width="200px" /><br/></a></td>
</tr>
  <tr>
    <td  style="border-color: dodgerblue; border-bottom-right-radius: 8px;  border-bottom-left-radius: 8px;" align="center">‍👨🏻‍💻 조인태</td>
    <td  style="border-color: dodgerblue; border-bottom-right-radius: 8px;  border-bottom-left-radius: 8px;" align="center">‍👨🏻‍💻 박현규</td>
</table>
<br/>

## 🚩 R고리즘 스터디 규칙

- 매 주 마다 돌아가면서, 알고리즘 주제별로 문제를 선정한다. (주제는 추가/수정될 수 있습니다.)
- 주차별 폴더 README.md 파일에 문제 주제에 맞는 문제 3문제를 작성한다.
- 각 주차 폴더에 자신의 Github 아이디로 폴더를 생성한다.
- 폴더 안에 코드를 올린다. 파일명은 `문제명_사용언어` 순으로 작성한다.
  - ex : `올바른괄호.js`
- 모르는건 구글링하기

## 📆 주차 별 알고리즘

- 박스 색깔
  - 초록색 ✅ : 모든 문제 해결
  - 파란색 ☑️ : 일부 문제 해결
  - 빨간색 ❌ : 모든 문제 미해결

| 주차 | 알고리즘         | 조인태 | 박현규 |
| :--: | ---------------- | :----: | :----: |
|  1   | 정렬 & 큐 & 스택 |   ☑️   |  :-:   |
|  2   | 해시 & 맵        |  :-:   |  :-:   |
|  3   | 우선 순위 큐     |  :-:   |  :-:   |
|  4   | 백트래킹         |  :-:   |  :-:   |
|  5   | 동적 계획법      |  :-:   |  :-:   |
|  6   | 누적 합          |  :-:   |  :-:   |
|  7   | 그리디           |  :-:   |  :-:   |
|  8   | 분할 정복        |  :-:   |  :-:   |
|  9   | 이분 탐색        |  :-:   |  :-:   |
|  10  | BFS , DFS        |  :-:   |  :-:   |
|  11  | 최단 경로        |  :-:   |  :-:   | 
|  12  | 트리             |  :-:   |  :-:   |
|  13  | 투 포인터        |  :-:   |  :-:   |

## 🎸 기타

- 백준 문제 선정 방법

  1. [solved.ac](solved.ac) 에 들어가서 원하는 알고리즘 태그 에 들어가서 문제 선정
  2. 또는 [solved.ac](solved.ac) 검색창에 아래와 같이 조건을 걸어서 검색할 수 있다.

  ```plain
  (#stack|#queue)&*s5..g1 // 스택 또는 큐 태그를 가지고 실버5 ~ 골드1 까지의 문제 검색
  ```

  3. [단계별 풀어보기](https://www.acmicpc.net/step) 확인 (난이도 체크 하기!)

- 백준 풀이 시 javascript 입출력
  - 백준은 node.js 환경입니다.
  - vscode에서 테스트 시 node example.js 명령어로 실행하여 테스트
  - 한줄 입력

```javascript
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");

let num = Number(input);

for (let i = 1; i <= num; i++) {
  console.log(i);
}
```

- 여러줄 입력

```javascript
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let count = input[0];
let numbers = [];

for (let i = 1; i < input.length; i++) {
  if (input[i] !== "") {
    numbers.push(input[i].split(" "));
  }
}

for (let i = 0; i < numbers.length; i++) {
  let num1 = Number(numbers[i][0]);
  let num2 = Number(numbers[i][1]);

  console.log(num1 + num2);
}
```

- 프로그래머스
  1. [고득점 키트(유형별 정리)](https://school.programmers.co.kr/learn/challenges?tab=algorithm_practice_kit) 는 문제수가 적은 단점이 있음
  2. 각 문제별 어떤 알고리즘을 사용했는지 풀지 않고서는 알기 어렵기 때문에 _"프로그래머스 등산코스 정하기 알고리즘"_ 라고 검색하면 블로그에 어떤 알고리즘이 사용되었는지 알 수 있음
