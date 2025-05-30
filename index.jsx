import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Instagram } from "lucide-react";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-yellow-50 text-gray-900">
      <header className="bg-yellow-400 py-10 shadow-md text-center">
        <h1 className="text-4xl font-bold">Saikumar Kaumurthy Rajendra</h1>
        <p className="text-lg mt-2">Masters in Clean Energy Processes | ML Enthusiast | Materials Scientist</p>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12 space-y-16">
        <section>
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-lg">
            I am a dedicated and analytical Chemical Engineer with a focus on sustainable technologies and process optimization.
            Currently pursuing my MSc in Clean Energy Processes at Friedrich-Alexander University. Passionate about data science,
            machine learning applications in materials, and carbon conversion technologies.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Projects & Experience</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="p-4">
              <h3 className="text-xl font-bold">Silica Extraction Internship</h3>
              <p>Improved silica yield by 15% from rice husk ash using alkaline leaching and data analysis.</p>
            </Card>
            <Card className="p-4">
              <h3 className="text-xl font-bold">ANN-Based Fault Diagnosis</h3>
              <p>Developed a 2-stage ML model using Python and LDA for fault detection in reactors.</p>
            </Card>
            <Card className="p-4">
              <h3 className="text-xl font-bold">Carbon Capture Heat Exchanger</h3>
              <p>Designed a shell-and-tube heat exchanger with UNISIM and Excel, increasing efficiency by 15%.</p>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>IBM Data Science – Coursera (2024)</li>
            <li>Google Advanced Data Analytics – Coursera (2024)</li>
            <li>NPTEL: Unit Operations of Particulate Matter (2022)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
          <form className="space-y-4 max-w-md">
            <input type="text" placeholder="Your Name" className="w-full p-2 border rounded" required />
            <input type="email" placeholder="Your Email" className="w-full p-2 border rounded" required />
            <textarea placeholder="Your Message" className="w-full p-2 border rounded" rows="4" required></textarea>
            <Button type="submit">Send Message</Button>
          </form>
        </section>
      </main>

      <footer className="bg-yellow-200 py-6 text-center">
        <p>Contact: <a href="mailto:saikumarckr@gmail.com" className="underline">saikumarckr@gmail.com</a></p>
        <div className="flex justify-center space-x-6 mt-2">
          <a href="https://www.linkedin.com/in/saikumar183" target="_blank" rel="noopener noreferrer"><Linkedin /></a>
          <a href="https://www.instagram.com/sai.k.chowdary" target="_blank" rel="noopener noreferrer"><Instagram /></a>
          <a href="mailto:saikumarckr@gmail.com"><Mail /></a>
        </div>
      </footer>
    </div>
  );
}
