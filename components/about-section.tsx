import { Briefcase, GraduationCap, Heart } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-16">
      <div className="mb-12 text-center">
        <h2 className="mb-2 text-3xl font-bold text-foreground md:text-4xl">
          About Me
        </h2>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          My journey, experience, and what drives me as a developer.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Left column - Bio */}
        <div className="rounded-xl bg-card/30 p-6 backdrop-blur-sm">
          <h3 className="mb-4 text-xl font-semibold text-foreground">
            My Story
          </h3>
          <p className="mb-4 text-foreground/80">
            {`I started my journey as a self-taught developer, fascinated by the
            ability to create something from nothing with just code. What began
            as a hobby quickly evolved into a passion and then a career.`}
          </p>
          <p className="mb-4 text-foreground/80">
            {`With a background in both design and computer science, I bring a
            unique perspective to development projects. I believe in creating
            applications that are not only functional but also intuitive and
            enjoyable to use.`}
          </p>
          <p className="text-foreground/80">
            {`When I'm not coding, you can find me exploring new technologies,
            contributing to open-source projects, or mentoring aspiring
            developers. I'm constantly learning and evolving my skills to stay
            at the forefront of web development.`}
          </p>
        </div>

        {/* Right column - Timeline */}
        <div className="rounded-xl bg-card/30 p-6 backdrop-blur-sm">
          <h3 className="mb-4 text-xl font-semibold text-foreground">
            Experience & Education
          </h3>

          <div className="space-y-6">
            {/* Work Experience */}
            <div className="relative border-l border-primary/30 pl-6">
              <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-primary"></div>
              <div className="mb-1 flex items-center">
                <Briefcase className="mr-2 h-4 w-4 text-primary" />
                <h4 className="text-lg font-medium text-foreground">
                  Junior Backend Developer
                </h4>
              </div>
              <p className="mb-1 text-sm text-primary">
                2024 - Present • Elemensis Softech LLP.
              </p>
              <p className="text-sm text-foreground/80">
                Leading frontend development for enterprise applications,
                mentoring junior developers, and implementing best practices.
              </p>
            </div>

            <div className="relative border-l border-primary/30 pl-6">
              <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-primary"></div>
              <div className="mb-1 flex items-center">
                <Briefcase className="mr-2 h-4 w-4 text-primary" />
                <h4 className="text-lg font-medium text-foreground">
                  UI/UX Intern
                </h4>
              </div>
              <p className="mb-1 text-sm text-primary">
                2023 - 2024 • Tata Strive
              </p>
              <p className="text-sm text-foreground/80">
                Developed responsive websites and web applications for clients
                across various industries.
              </p>
            </div>

            {/* Education */}
            <div className="relative border-l border-primary/30 pl-6">
              <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-primary"></div>
              <div className="mb-1 flex items-center">
                <GraduationCap className="mr-2 h-4 w-4 text-primary" />
                <h4 className="text-lg font-medium text-foreground">BCA</h4>
              </div>
              <p className="mb-1 text-sm text-primary">
                2021 - 2024 • Bhagwan Mahavir University
              </p>
              <p className="text-sm text-foreground/80">
                Specialized in Human-Computer Interaction and Web Technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
