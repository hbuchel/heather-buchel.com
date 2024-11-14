class BlueskyPost extends HTMLElement {
  constructor() {
    super();
  }

  static observedAttributes = ["postId"];

  async connectedCallback() {
    const template = document.querySelector("#social-template");
    const node = document.importNode(template.content, true);

    const data = { ...(await this.postData()) };

    if(data) {
      let postText = '';
      const wordArray = data.record.text.split(" ");
      wordArray.slice(0,30).forEach((word, i) => {
        if(i === 0) {
          postText += word
        } else {
          if(word.indexOf('heather-buchel.com') === -1) {
             postText += ` ${word}`
          }
         
        }
      
      });
    
      node.querySelector('[data-key="postText"]').textContent = `${postText}...`;
      node.querySelector('[data-key="likeCount"]').textContent = data.likeCount;
      node.querySelector('[data-key="replyCount"]').textContent = data.replyCount;
      node.querySelector('[data-key="repostCount"]').textContent = data.repostCount;
    }
    
    this.append(node);
  }

  get postId() {
    return this.getAttribute('postId');
  }

  get userData() {
    return fetch(
      `https://public.api.bsky.app/xrpc/app.bsky.actor.getProfile?actor=heather-buchel.com`
    ).then((response) => response.json());
  }

  async postData() {
    const user = await this.userData;
   
    const data = await fetch(
      `https://public.api.bsky.app/xrpc/app.bsky.feed.getPosts?uris=at://${user.did}/app.bsky.feed.post/${this.postId}`
    ).then((response) => response.json());
    
    return data.posts[0];
  }
}

customElements.define('bluesky-post', BlueskyPost);

class MastodonPost extends HTMLElement {
  constructor() {
    super();
  }

  static observedAttributes = ["postId"];

  async connectedCallback() {
    const template = document.querySelector("#social-template");
    const node = document.importNode(template.content, true);
    
    const data = { ...(await this.postData()) };

    if(data) {
      /**
       * Mastodon returns HTML for post content, but since I want to only display a truncated
       * amount of text, I'm converting it to an element and extracting the textContent from it.
       * 
       * Then, splitting that into an array so we can return X number of words (instead of truncating by
       * characters which can split words)
       */

      const postHTML = document.createElement('div');
      postHTML.innerHTML = data.content;
      const wordArrayFromHTML = postHTML.textContent.split(" ");
      let postText = '';
      wordArrayFromHTML.slice(0,30).forEach((word, i) => i === 0 ? postText += word : postText += ` ${word}`);
     
      node.querySelector('[data-key="postText"]').textContent = `${postText}...`;
      node.querySelector('[data-key="likeCount"]').textContent = data.favourites_count;
      node.querySelector('[data-key="replyCount"]').textContent = data.replies_count;
      node.querySelector('[data-key="repostCount"]').textContent = data.reblogs_count;
    }
    
    this.append(node);
  }

  get postId() {
    return this.getAttribute('postId');
  }

  async postData() {
    const data = await fetch(`https://hachyderm.io/api/v1/statuses/${this.postId}`).then((response) => response.json());
    return data;
  }
}

customElements.define('mastodon-post', MastodonPost);
