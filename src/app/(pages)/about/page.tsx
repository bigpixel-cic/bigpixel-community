import Testimonial from '@/components/global/testimonial';

export default function AboutPage() {
  return (
    <div className="flex flex-col items-start gap-8 lg:gap-12">
      <article className="mx-auto prose md:prose-lg 2xl:prose-xl prose-headings:font-headline prose-h1:text-metal-950 prose-h1:font-black prose-metal dark:prose-invert dark:prose-h1:text-metal-50">
        <h1>About Big Pixel&reg; Community CIC</h1>
        <h2>We exist because the digital gap shouldn&#39;t</h2>
        <p>
          Solid digital work changes things. A well-built website helps a charity find more
          supporters, and a clear digital strategy helps a social enterprise grow in the right
          direction. Better systems mean teams spend less time fighting their tools, and more time
          on the actual work they love to do.
        </p>
        <p>
          The annoying thing is that charities know this. They just don&#39;t have the budget to
          employ an agency to help them with it.
        </p>
        <p>Big Pixel® exists to close that gap.</p>
        <Testimonial
          quote="We really appreciate the work Big Pixel did with us, particularly on the Mailchimp project. Their support has helped us put stronger foundations in place, and the improvements to structure and usability have made a clear difference for the team."
          organisation="Calibre Audio"
          logo="/orgs/calibre-208x208.webp"
          slideDirection="left"
        />
        <h2>Who we are</h2>

        <p>
          We&#39;re a digital strategy, design, and development studio working{' '}
          <strong>exclusively</strong> with charities, non-profits, and social enterprises. We
          combine twenty years of design experience with full-stack development skills and, more
          importantly, genuine experience of working inside the charity sector.
        </p>

        <p>
          We know how organisations like yours make decisions, how budgets get allocated, and what
          it actually takes to get something approved by a trustee board. We like to think that
          it&#39;s the difference between a studio that works <em>for</em> charities and one that
          works <em>with</em> them.
        </p>

        <Testimonial
          quote="Our myriad of small groups struggled to gain attention and a prominent, professional website was a key part of our strategy for impact. Big Pixel's one-stop design and authoring gave us a strong identity, clear graphic branding, and an attractive site as a platform for our volunteers. We owe them many thanks!"
          organisation="Marine Conservation for Norfolk Action Group"
          logo="/orgs/mcnag-512x512.webp"
          slideDirection="right"
        />

        <h2>Why the CIC structure</h2>

        <p>
          Being a Community Interest Company limited by guarantee means our profits are legally
          locked into the organisation rather than distributed to shareholders. That isn&#39;t meant
          to sound like virtue signalling. It&#39;s a structural choice that makes everything else
          we do possible.
        </p>

        <p>
          Because we&#39;re not optimising for profit, we can operate a sliding scale pricing model
          based on your organisation&#39;s annual income. Larger, better-funded organisations pay
          closer to full rate because they can afford to. Smaller organisations pay less because
          they can&#39;t. The difference is covered by the way the CIC is structured and the funding
          we seek to support it.
        </p>

        <p>
          The goal (eventually) is to get as close to free as possible for the organisations that
          need us most.
        </p>

        <p>
          If you want to support us in that goal, either through financial support or sponsorship,
          please get in touch.
        </p>

        <div className="not-prose mt-8 bg-purple-50 dark:bg-purple-800 rounded-xl p-6 lg:p-10 shadow-md">
          <div className="flex flex-col gap-4 text-lg lg:text-xl text-black dark:text-white font-medium">
            <p>
              When I first set up Big Pixel®, it was with the thought that I would create a massive
              consultancy, get stinking rich, write many books on how great I was.
            </p>
            <p>The only problem was I wasn&#39;t built that way.</p>
            <p>
              I&#39;d spent a decade working inside a charity. That does something to you. You start
              to feel the injustice of organisations tackling homelessness, inequality, and climate
              change being priced out of the tools that every commercial company takes for granted.
            </p>
            <p>
              Making Big Pixel® a CIC felt like the right fit. It means I can support organisations
              that are helping make the world a better place, without taking half their budget in
              the process.
            </p>
            <p className="text-sm lg:text-base font-extrabold text-purple-950 dark:text-purple-300">
              James Beston, Founder
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
