import Image from "next/image";
import React from "react";

function Apply() {
  return (
    <main>
      <header>Apply to our Institution today</header>
      <section className="flex items-stretch">
        <aside>
          <form action="">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
            laudantium dicta optio! Autem quisquam, repellat corrupti
            perferendis vero cupiditate cumque. Corporis est libero quaerat ut,
            temporibus deserunt eveniet repellat! Deleniti tempore amet
            accusantium harum magni sint odit quaerat maiores tenetur nam nihil
            ipsum facere molestiae voluptatum voluptatem dolores assumenda eius
            voluptates corporis, necessitatibus beatae aut repudiandae inventore
            molestias! Beatae, sit? Rem commodi quo ab quos vitae vel possimus
            expedita alias eveniet rerum dolor, pariatur, tempore maxime minima
            eaque fugit unde sunt similique explicabo enim, laborum voluptas?
            Magni ab ipsa, sunt officiis excepturi quidem quasi porro provident
            id consequatur odio fugiat tempora quisquam fugit temporibus ratione
            laboriosam totam fuga voluptate obcaecati sint veniam sed autem
            eligendi. Odit ad et ea ipsa quod placeat molestiae deleniti,
            quibusdam commodi maxime, iusto aspernatur. Nisi commodi ea atque
            velit ipsam quae, qui saepe earum excepturi voluptatum. Corporis
            ipsum est obcaecati voluptatum nisi quo molestiae rem velit quam
            repudiandae. Sapiente, iste. Atque cumque alias sapiente voluptates,
            eius repudiandae mollitia iste, soluta quidem, quia sint facere
            magni. Natus facilis quidem nostrum dignissimos explicabo saepe eos
            vel, obcaecati perspiciatis quod enim eaque quisquam veniam. Quae
            amet optio neque ducimus itaque ipsum molestiae in, nobis qui, autem
            architecto recusandae.
          </form>
        </aside>

        <figure className="relative hidden md:flex ">
          <Image
            src="/images/qualification-hero.jpg"
            alt=""
            fill
            className="object-cover object-center w-full h-full"
          />
        </figure>
      </section>
    </main>
  );
}

export default Apply;
