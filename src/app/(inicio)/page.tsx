export default function InicioPage() {
  return (
    <div>
      {/* Sección de contenido para probar el scroll */}
      <section className="min-h-screen bg-gradient-to-b from-blue-900 to-purple-900 flex items-center justify-center">
        <div className="text-center text-white p-8">
          <h2 className="text-4xl font-bold mb-6">Sección 1</h2>
          <p className="text-xl mb-8">Contenido de prueba para verificar el comportamiento del scroll</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Card 1</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Card 2</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Card 3</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 2 */}
      <section className="min-h-screen bg-gradient-to-b from-purple-900 to-pink-900 flex items-center justify-center">
        <div className="text-center text-white p-8">
          <h2 className="text-4xl font-bold mb-6">Sección 2</h2>
          <p className="text-xl mb-8">Más contenido para seguir probando el scroll</p>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 p-8 rounded-lg">
              <h3 className="text-3xl font-semibold mb-6">Información importante</h3>
              <p className="text-lg leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, voluptatum! 
                Ipsum ducimus quod consectetur voluptatibus, mollitia ea minus nemo quisquam 
                temporibus cumque veniam accusamus labore quidem exercitationem dolorem 
                voluptates fugit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 3 */}
      <section className="min-h-screen bg-gradient-to-b from-pink-900 to-red-900 flex items-center justify-center">
        <div className="text-center text-white p-8">
          <h2 className="text-4xl font-bold mb-6">Sección 3</h2>
          <p className="text-xl mb-8">Última sección para completar el test</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Feature 1</h3>
              <p>Descripción de la primera característica importante.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Feature 2</h3>
              <p>Descripción de la segunda característica importante.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Feature 3</h3>
              <p>Descripción de la tercera característica importante.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Feature 4</h3>
              <p>Descripción de la cuarta característica importante.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección final */}
      <section className="min-h-screen bg-gradient-to-b from-red-900 to-gray-900 flex items-center justify-center">
        <div className="text-center text-white p-8">
          <h2 className="text-4xl font-bold mb-6">Final del Test</h2>
          <p className="text-xl mb-8">Ahora puedes scrollear hacia arriba para ver el comportamiento completo</p>
          <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
            Volver arriba
          </button>
        </div>
      </section>
    </div>
  );
}