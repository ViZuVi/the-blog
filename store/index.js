export const state = () => ({
  posts: [
    {
      id: 1,
      author: {
        avatar: "",
        name: "Kate"
      },
      rating: 4.5,
      date: new Date(),
      title: "Some awesome post",
      img: "https://yandex.ru/images/search?utm_source=main_stripe_big&text=%D0%9D%D0%BE%D1%87%D0%BD%D0%BE%D0%B5%20%D0%9D%D0%B5%D0%B1%D0%BE&nl=1&source=morda&pos=1&rpt=simage&img_url=https%3A%2F%2Fetosibir.ru%2Fwp-content%2Fuploads%2Fvk_photos%2F177259%2F1ANosjyJzBo.jpg",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, sequi itaque! Ducimus et magnam velit ea inventore voluptates cum nobis temporibus! Temporibus, qui nisi a earum soluta nesciunt repudiandae ullam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, sequi itaque! Ducimus et magnam velit ea inventore voluptates cum nobis temporibus! Temporibus, qui nisi a earum soluta nesciunt repudiandae ullam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, sequi itaque! Ducimus et magnam velit ea inventore voluptates cum nobis temporibus! Temporibus, qui nisi a earum soluta nesciunt repudiandae ullam!",
      comments: [
        {
          id: 1,
          date: new Date(),
          comment: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam molestiae tempore tenetur velit. Tenetur perferendis accusamus, in laboriosam at culpa eos esse quaerat, iste cum debitis voluptatem numquam velit labore!",
          author: {
            avatar: "",
            name: "John"
          }
        }
      ]
    },
    {
      id: 2,
      author: {
        avatar: "",
        name: "Kate"
      },
      rating: 4.5,
      date: new Date(),
      title: "Some awesome post",
      img: "https://yandex.ru/images/search?utm_source=main_stripe_big&text=%D0%9D%D0%BE%D1%87%D0%BD%D0%BE%D0%B5%20%D0%9D%D0%B5%D0%B1%D0%BE&nl=1&source=morda&pos=2&rpt=simage&img_url=https%3A%2F%2Fsun1-97.userapi.com%2FZ190DHA11RQiysDS2hizgTgxWj7lrVYWGvqxUw%2F1xMxK5M0Z2c.jpg",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, sequi itaque! Ducimus et magnam velit ea inventore voluptates cum nobis temporibus! Temporibus, qui nisi a earum soluta nesciunt repudiandae ullam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, sequi itaque! Ducimus et magnam velit ea inventore voluptates cum nobis temporibus! Temporibus, qui nisi a earum soluta nesciunt repudiandae ullam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, sequi itaque! Ducimus et magnam velit ea inventore voluptates cum nobis temporibus! Temporibus, qui nisi a earum soluta nesciunt repudiandae ullam!",
      comments: [
        {
          id: 1,
          date: new Date(),
          comment: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam molestiae tempore tenetur velit. Tenetur perferendis accusamus, in laboriosam at culpa eos esse quaerat, iste cum debitis voluptatem numquam velit labore!",
          author: {
            avatar: "",
            name: "John"
          }
        }
      ]
    },
    {
      id: 3,
      author: {
        avatar: "",
        name: "Kate"
      },
      rating: 4.5,
      date: new Date(),
      title: "Some awesome post",
      img: "https://yandex.ru/images/search?utm_source=main_stripe_big&text=%D0%9D%D0%BE%D1%87%D0%BD%D0%BE%D0%B5%20%D0%9D%D0%B5%D0%B1%D0%BE&nl=1&source=morda&pos=2&rpt=simage&img_url=https%3A%2F%2Fsun1-97.userapi.com%2FZ190DHA11RQiysDS2hizgTgxWj7lrVYWGvqxUw%2F1xMxK5M0Z2c.jpg&rlt_url=https%3A%2F%2Fimages.golos.io%2FDQmPj67DvRTMkP2ezKBnMuB5DouVe5EGv1yjRr8VnDX6rDT%2Fimage.jpg&ogl_url=https%3A%2F%2Fsun1-97.userapi.com%2FZ190DHA11RQiysDS2hizgTgxWj7lrVYWGvqxUw%2F1xMxK5M0Z2c.jpg",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, sequi itaque! Ducimus et magnam velit ea inventore voluptates cum nobis temporibus! Temporibus, qui nisi a earum soluta nesciunt repudiandae ullam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, sequi itaque! Ducimus et magnam velit ea inventore voluptates cum nobis temporibus! Temporibus, qui nisi a earum soluta nesciunt repudiandae ullam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, sequi itaque! Ducimus et magnam velit ea inventore voluptates cum nobis temporibus! Temporibus, qui nisi a earum soluta nesciunt repudiandae ullam!",
      comments: [
        {
          id: 1,
          date: new Date(),
          comment: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam molestiae tempore tenetur velit. Tenetur perferendis accusamus, in laboriosam at culpa eos esse quaerat, iste cum debitis voluptatem numquam velit labore!",
          author: {
            avatar: "",
            name: "John"
          }
        }
      ]
    },
    {
      id: 4,
      author: {
        avatar: "",
        name: "Kate"
      },
      rating: 4.5,
      date: new Date(),
      title: "Some awesome post",
      img: "https://yandex.ru/images/search?utm_source=main_stripe_big&text=%D0%9D%D0%BE%D1%87%D0%BD%D0%BE%D0%B5%20%D0%9D%D0%B5%D0%B1%D0%BE&nl=1&source=morda&pos=2&rpt=simage&img_url=https%3A%2F%2Fsun1-97.userapi.com%2FZ190DHA11RQiysDS2hizgTgxWj7lrVYWGvqxUw%2F1xMxK5M0Z2c.jpg&rlt_url=https%3A%2F%2Fsun9-31.userapi.com%2Fc855532%2Fv855532153%2F20a38b%2FocK1XWxtnq4.jpg&ogl_url=https%3A%2F%2Fsun1-97.userapi.com%2FZ190DHA11RQiysDS2hizgTgxWj7lrVYWGvqxUw%2F1xMxK5M0Z2c.jpg",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, sequi itaque! Ducimus et magnam velit ea inventore voluptates cum nobis temporibus! Temporibus, qui nisi a earum soluta nesciunt repudiandae ullam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, sequi itaque! Ducimus et magnam velit ea inventore voluptates cum nobis temporibus! Temporibus, qui nisi a earum soluta nesciunt repudiandae ullam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, sequi itaque! Ducimus et magnam velit ea inventore voluptates cum nobis temporibus! Temporibus, qui nisi a earum soluta nesciunt repudiandae ullam!",
      comments: [
        {
          id: 1,
          date: new Date(),
          comment: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam molestiae tempore tenetur velit. Tenetur perferendis accusamus, in laboriosam at culpa eos esse quaerat, iste cum debitis voluptatem numquam velit labore!",
          author: {
            avatar: "",
            name: "John"
          }
        }
      ]
    },
    {
      id: 5,
      author: {
        avatar: "",
        name: "Kate"
      },
      rating: 4.5,
      date: new Date(),
      title: "Some awesome post",
      img: "https://yandex.ru/images/search?utm_source=main_stripe_big&text=%D0%9D%D0%BE%D1%87%D0%BD%D0%BE%D0%B5%20%D0%9D%D0%B5%D0%B1%D0%BE&nl=1&source=morda&pos=2&rpt=simage&img_url=https%3A%2F%2Fsun1-97.userapi.com%2FZ190DHA11RQiysDS2hizgTgxWj7lrVYWGvqxUw%2F1xMxK5M0Z2c.jpg&rlt_url=https%3A%2F%2Fstihi.ru%2Fpics%2F2015%2F10%2F26%2F4499.jpg&ogl_url=https%3A%2F%2Fsun1-97.userapi.com%2FZ190DHA11RQiysDS2hizgTgxWj7lrVYWGvqxUw%2F1xMxK5M0Z2c.jpg",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, sequi itaque! Ducimus et magnam velit ea inventore voluptates cum nobis temporibus! Temporibus, qui nisi a earum soluta nesciunt repudiandae ullam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, sequi itaque! Ducimus et magnam velit ea inventore voluptates cum nobis temporibus! Temporibus, qui nisi a earum soluta nesciunt repudiandae ullam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, sequi itaque! Ducimus et magnam velit ea inventore voluptates cum nobis temporibus! Temporibus, qui nisi a earum soluta nesciunt repudiandae ullam!",
      comments: [
        {
          id: 1,
          date: new Date(),
          comment: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam molestiae tempore tenetur velit. Tenetur perferendis accusamus, in laboriosam at culpa eos esse quaerat, iste cum debitis voluptatem numquam velit labore!",
          author: {
            avatar: "",
            name: "John"
          }
        }
      ]
    },
    {
      id: 6,
      author: {
        avatar: "",
        name: "Kate"
      },
      rating: 4.5,
      date: new Date(),
      title: "Some awesome post",
      img: "https://yandex.ru/images/search?utm_source=main_stripe_big&text=%D0%9D%D0%BE%D1%87%D0%BD%D0%BE%D0%B5%20%D0%9D%D0%B5%D0%B1%D0%BE&nl=1&source=morda&pos=6&rpt=simage&img_url=https%3A%2F%2Fscontent-hel2-1.cdninstagram.com%2Fv%2Ft51.2885-15%2Fe35%2F101229636_1134547456907121_4088190620066238808_n.jpg%3F_nc_ht%3Dscontent-hel2-1.cdninstagram.com%26_nc_cat%3D109%26_nc_ohc%3Dvj-pG5XT038AX9ZsUge%26oh%3D29cf2af7572dda0c57b9d77fb996ae75%26oe%3D5EFD902F",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, sequi itaque! Ducimus et magnam velit ea inventore voluptates cum nobis temporibus! Temporibus, qui nisi a earum soluta nesciunt repudiandae ullam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, sequi itaque! Ducimus et magnam velit ea inventore voluptates cum nobis temporibus! Temporibus, qui nisi a earum soluta nesciunt repudiandae ullam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, sequi itaque! Ducimus et magnam velit ea inventore voluptates cum nobis temporibus! Temporibus, qui nisi a earum soluta nesciunt repudiandae ullam!",
      comments: [
        {
          id: 1,
          date: new Date(),
          comment: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam molestiae tempore tenetur velit. Tenetur perferendis accusamus, in laboriosam at culpa eos esse quaerat, iste cum debitis voluptatem numquam velit labore!",
          author: {
            avatar: "",
            name: "John"
          }
        }
      ]
    },
    {
      id: 7,
      author: {
        avatar: "",
        name: "Kate"
      },
      rating: 4.5,
      date: new Date(),
      title: "Some awesome post",
      img: "https://yandex.ru/images/search?utm_source=main_stripe_big&text=%D0%9D%D0%BE%D1%87%D0%BD%D0%BE%D0%B5%20%D0%9D%D0%B5%D0%B1%D0%BE&nl=1&source=morda&pos=6&rpt=simage&img_url=https%3A%2F%2Fscontent-hel2-1.cdninstagram.com%2Fv%2Ft51.2885-15%2Fe35%2F101229636_1134547456907121_4088190620066238808_n.jpg%3F_nc_ht%3Dscontent-hel2-1.cdninstagram.com%26_nc_cat%3D109%26_nc_ohc%3Dvj-pG5XT038AX9ZsUge%26oh%3D29cf2af7572dda0c57b9d77fb996ae75%26oe%3D5EFD902F&rlt_url=https%3A%2F%2Foir.mobi%2Fuploads%2Fposts%2F2020-01%2Fthumbs%2F1578162052_40-58.png&ogl_url=https%3A%2F%2Fscontent-hel2-1.cdninstagram.com%2Fv%2Ft51.2885-15%2Fe35%2F101229636_1134547456907121_4088190620066238808_n.jpg%3F_nc_ht%3Dscontent-hel2-1.cdninstagram.com%26_nc_cat%3D109%26_nc_ohc%3Dvj-pG5XT038AX9ZsUge%26oh%3D29cf2af7572dda0c57b9d77fb996ae75%26oe%3D5EFD902F",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, sequi itaque! Ducimus et magnam velit ea inventore voluptates cum nobis temporibus! Temporibus, qui nisi a earum soluta nesciunt repudiandae ullam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, sequi itaque! Ducimus et magnam velit ea inventore voluptates cum nobis temporibus! Temporibus, qui nisi a earum soluta nesciunt repudiandae ullam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, sequi itaque! Ducimus et magnam velit ea inventore voluptates cum nobis temporibus! Temporibus, qui nisi a earum soluta nesciunt repudiandae ullam!",
      comments: [
        {
          id: 8,
          date: new Date(),
          comment: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam molestiae tempore tenetur velit. Tenetur perferendis accusamus, in laboriosam at culpa eos esse quaerat, iste cum debitis voluptatem numquam velit labore!",
          author: {
            avatar: "",
            name: "John"
          }
        }
      ]
    },
  ]
})
