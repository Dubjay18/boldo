import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { H2, H3, P, Subtle } from "@/components/ui/typography";

const blogPosts = [
  {
    image: "/placeholder-1.png",
    category: "Category",
    date: "November 22, 2021",
    title: "Pitch termsheet backing validation focus release.",
    author: {
      name: "Chandler Bing",
      avatar: "/profile.png",
    },
  },
  {
    image: "/placeholder-4.png",
    category: "Category",
    date: "November 22, 2021",
    title:
      "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
    author: {
      name: "Rachel Green",
      avatar: "/profile.png",
    },
  },
  {
    image: "/placeholder-5.png",
    category: "Category",
    date: "November 22, 2021",
    title:
      "Beta prototype sales iPad gen-z marketing network effects value proposition",
    author: {
      name: "Monica Geller",
      avatar: "/profile.png",
    },
  },
];

export function Blog() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <Subtle>Our Blog</Subtle>
          <H2 className="max-w-3xl mx-auto">
            Value proposition accelerator product management venture
          </H2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post, index) => (
            <Card key={index} className="border-none shadow-none">
              <CardHeader className="p-0">
                <div className="aspect-[4/3] relative rounded-2xl overflow-hidden mb-6">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent className="px-0">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Subtle className="text-navy-900">{post.category}</Subtle>
                    <Subtle>{post.date}</Subtle>
                  </div>
                  <H3 className="text-xl leading-tight">{post.title}</H3>
                  <div className="flex items-center gap-3">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                    <P>{post.author.name}</P>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center">
          <Button
            variant="outline"
            size="xl"
            className="border-2 border-navy-900 text-navy-900"
          >
            Load more
          </Button>
        </div>
      </div>
    </section>
  );
}
