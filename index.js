// tag 불러오기
const root = document.getElementById('root');
const ajaxBu = document.querySelector('#AJAX');
const fetchBu = document.querySelector('#fetch');
// post, comment API url 할당
const post = 'https://jsonplaceholder.typicode.com/posts';
const comment = 'https://jsonplaceholder.typicode.com/comments?postId=';
// AJAX의 버튼을 누르면 실행
ajaxBu.addEventListener('click', () => {
  const postAJAX = () => {
    //AJAX의 방식으로 API 가져오기
    const xhr = new XMLHttpRequest();
    xhr.open('GET', post, true);
    // xhr 이벤트리스너 load
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        // xhr의 데이터를 JSON로 parse
        let jsonData = JSON.parse(xhr.responseText);
        // for문을 통해 json 배열 안에 있는 데이터 불러오기
        for (let i = 0; i < jsonData.length; i++) {
          // AJAX 방식으로 API 안에 있는 데이터 가져오기
          let postData = jsonData[i];
          // postData의 userId의 값
          let userId = postData.userId;

          let keyNumber = `${comment}${i + 1}`;
          //fetch 방식으로 API 안에 있는 데이터 가져오기
          async function commentFe() {
            let fetchData = await fetch(keyNumber, { method: 'GET' });
            let parse = await fetchData.json();
            // for문을 통해 fetch 방식으로 가져온 API의 데이터를 가져오기
            for (let j = 0; j < parse.length; j++) {
              let commentData = parse[j];
              // ommentData의 postId 값
              let postId = commentData.postId;
              // 만약 postId와 userId의 값이 같다면,
              if (postId === userId) {
                let email = commentData.email;
                console.log(email);
              }
            }
          }
          commentFe();
        }
      }
    });

    xhr.send();
  };
  postAJAX();
});
