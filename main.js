const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

const menu = document.querySelector('.menu');
const navVertical = document.querySelector('.navigation-vertical');

navVertical.style.display = 'none';

menu.addEventListener('click', () => {
  if (navVertical.style.display === 'none') {
    navVertical.style.display = 'block';
  } else {
    navVertical.style.display = 'none';
  }
});

  //  const gallery = document.getElementById('images-chapter-one');
  //   const totalImages = 36

  //   for (let i = 1; i <= totalImages; i++) {
  //     const img = document.createElement('img');
  //     img.src = `chapters/chapter-one${i}.png`;
    
  //     gallery.appendChild(img);
  //   }

  //  const gallery = document.getElementById('images-chapter-one');
  //   const totalImages = 36;

  //   for (let i = 1; i <= totalImages; i += 4) {
  //     const spread = document.createElement('div');
  //     spread.className = 'chapter-one-spread';

  //     // Order: top-left, bottom-left, top-right, bottom-right
  //     const order = [i, i+1, i+2, i+3];

  //     order.forEach(n => {
  //       if (n <= totalImages) {
  //         const img = document.createElement('img');
  //         img.src = `chapters/chapter-one${n}.png`;
  //         img.alt = `Page ${n}`;
  //         spread.appendChild(img);
  //       }
  //     });

  //     gallery.appendChild(spread);
  //   }

function loadChapter(galleryId, spreadClass, folder, prefix, totalImages) {
  const gallery = document.getElementById(galleryId);
 
  for (let i = 1; i <= totalImages; i += 4) {
    const spread = document.createElement('div');
    spread.className = spreadClass;
 
    const order = [i, i+2, i+1, i+3];
 
    order.forEach(n => {
      if (n <= totalImages) {
        const img = document.createElement('img');
        img.src = `${folder}/${prefix}${n}.webp`;
        img.alt = `Page ${n}`;
        spread.appendChild(img);
      }
    });
 
    gallery.appendChild(spread);
  }
}
 
function loadChapterTwoTwo(galleryId, folder, prefix, totalImages) {
  const gallery = document.getElementById(galleryId);
 
  for (let i = 1; i <= totalImages; i += 3) {
    const spread = document.createElement('div');
    spread.className = 'chapter-two-two-spread';
 
    [i, i+1, i+2].forEach(n => {
      if (n <= totalImages) {
        const img = document.createElement('img');
        img.src = `${folder}/${prefix}${n}.webp`;
        img.alt = `Page ${n}`;
        spread.appendChild(img);
      }
    });
 
    gallery.appendChild(spread);
  }
}
 
loadChapter('images-chapter-one', 'chapter-one-spread', 'chapters', 'chapter-one', 36);
loadChapter('images-chapter-two-one', 'chapter-two-one-spread', 'chapters', 'chapter-two-one', 4);
loadChapterTwoTwo('images-chapter-two-two', 'chapters', 'chapter-two-two', 12);
loadChapter('images-chapter-three', 'chapter-three-spread', 'chapters', 'chapter-three', 24);