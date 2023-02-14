const images: { url: string; alt: string }[] = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const content = document.querySelector(".gallery") as HTMLUListElement;
content.style.display = "grid";
content.style.gap = "10px";

const markup:string = images
  .map(
    (image: { url: string; alt: string }): string =>
      `<img src="${image.url}" alt="Photo of ${image.alt}" class="content_img">`
  )
  .join("");

content.insertAdjacentHTML("beforeend", markup);
