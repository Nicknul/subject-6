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
        let postData = JSON.parse(xhr.responseText);

        for (let i = 0; i < postData.length; i++) {
          let keyNumber = `${comment}${i + 1}`;
          console.log(keyNumber);
        }

        async function commentFe() {
          let commentData = await fetch(comment, { method: 'GET' });
          let parse = await commentData.json();
          // console.log(parse);
        }
        commentFe();
      }
    });

    xhr.send();
  };
  postAJAX();
});
