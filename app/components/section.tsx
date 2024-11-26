const Section = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-full flex flex-col py-16 px-32">
      {children}
    </section>
  );
}
 
export default Section;