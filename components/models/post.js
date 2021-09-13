// TODO: use TypeScript
export default class BasePost {
  id = null;
  author = {
    id: null,
    avatar: "",
    name: ""
  };
  rating = null;
  date = new Date();
  title = "";
  img = "";
  text = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, sequi itaque! Ducimus et magnam velit ea inventore voluptates cum nobis temporibus! Temporibus, qui nisi a earum soluta nesciunt repudiandae ullam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, sequi itaque! Ducimus et magnam velit ea inventore voluptates cum nobis temporibus! Temporibus, qui nisi a earum soluta nesciunt repudiandae ullam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, sequi itaque! Ducimus et magnam velit ea inventore voluptates cum nobis temporibus! Temporibus, qui nisi a earum soluta nesciunt repudiandae ullam!";
  tag = "";
  comments = [
    {
      id: null,
      date: new Date(),
      comment: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam molestiae tempore tenetur velit. Tenetur perferendis accusamus, in laboriosam at culpa eos esse quaerat, iste cum debitis voluptatem numquam velit labore!",
      author: {
        avatar: "",
        name: ""
      }
    }
  ]
}