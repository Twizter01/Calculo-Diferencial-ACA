import React, { useState, useEffect } from 'react';
import { Calculator, BookOpen, BarChart3, Brain, LineChart, Target, Users, FunctionSquare as Function, TrendingUp, Zap, ChevronRight, Play, Pause, Info, ExternalLink, CheckCircle } from 'lucide-react';

function App() {
  const [animationTime, setAnimationTime] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [timeValue, setTimeValue] = useState(4);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAnimating) {
      interval = setInterval(() => {
        setAnimationTime(prev => (prev + 0.1) % 8);
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isAnimating]);

  const calculateFunction = (t: number) => {
    return -0.5 * t * t + 4 * t;
  };

  const calculateDerivative = (t: number) => {
    return -t + 4;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <Calculator className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">ACA - Calculo Diferencial</h1>
              <div className="flex items-center gap-3 mt-2">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm font-medium text-gray-600">Gabriel Rodriguez</span>
                </div>
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <span className="text-sm text-gray-600">Informe Académico</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <article className="prose prose-lg max-w-none">
          
          {/* Objetivo General */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl shadow-xl mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-8 h-8" />
                <h2 className="text-2xl font-bold m-0">🎯 Objetivo General</h2>
              </div>
              <p className="text-blue-100 text-lg leading-relaxed m-0">
                Aplicar los conceptos de cálculo diferencial para modelar y analizar un fenómeno real mediante funciones, 
                derivadas y visualizaciones, apoyándose en herramientas de inteligencia artificial como ChatGPT, GeoGebra, 
                Excel con IA y WolframAlpha.
              </p>
            </div>
          </section>

          {/* Fase 1 */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white font-bold">
                1
              </div>
              <h2 className="text-2xl font-bold text-gray-900 m-0">🧩 Fase 1: Introducción y Selección del Problema</h2>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 mb-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Integrantes del equipo:</label>
                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                      <span className="text-gray-600">[Nombres de los estudiantes]</span>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Fenómeno elegido:</label>
                    <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                      <span className="text-green-800 font-medium">Aceleración de una patineta eléctrica</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
                  <h4 className="font-semibold text-blue-900 mb-3">Contexto del Problema</h4>
                  <p className="text-blue-800 text-sm leading-relaxed">
                    "Queremos analizar cómo cambia la velocidad de una patineta eléctrica cuando sube una pendiente de 10°..."
                  </p>
                </div>
              </div>
              
              <div className="mt-6 grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <span className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-700 font-bold text-sm">x</span>
                  <div>
                    <span className="font-semibold text-orange-900">Variable independiente:</span>
                    <span className="text-orange-700 ml-2">Tiempo (segundos)</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold text-sm">y</span>
                  <div>
                    <span className="font-semibold text-blue-900">Variable dependiente:</span>
                    <span className="text-blue-700 ml-2">Velocidad (m/s)</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Fase 2 */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center text-white font-bold">
                2
              </div>
              <h2 className="text-2xl font-bold text-gray-900 m-0">📊 Fase 2: Modelamiento con Funciones</h2>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 mb-8">
              <h3 className="text-xl font-bold text-purple-900 mb-6">Función propuesta:</h3>
              
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-mono font-bold text-purple-900 mb-2">
                    v(t) = -0.5t² + 4t
                  </div>
                  <p className="text-purple-700 text-sm">(función cuadrática de velocidad)</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-900 mb-2">Dominio</h4>
                  <p className="text-blue-800 font-mono">t ≥ 0</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-900 mb-2">Rango</h4>
                  <p className="text-green-800 text-sm">Depende del vértice de la parábola</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                  <h4 className="font-semibold text-orange-900 mb-2">Continuidad</h4>
                  <p className="text-orange-800 text-sm">Continua para todo t ∈ ℝ</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-200">
                <h4 className="text-lg font-semibold text-indigo-900 mb-4">Gráfica Interactiva en GeoGebra</h4>
                <FunctionGraph timeValue={timeValue} />
                <div className="mt-4 flex items-center gap-4">
                  <label className="text-sm font-medium text-gray-700">Tiempo (t):</label>
                  <input 
                    type="range"
                    min="0"
                    max="8"
                    step="0.1"
                    value={timeValue}
                    onChange={(e) => setTimeValue(Number(e.target.value))}
                    className="flex-1"
                  />
                  <span className="text-sm font-mono bg-white px-2 py-1 rounded border">{timeValue.toFixed(1)}s</span>
                </div>
              </div>
            </div>
          </section>

          {/* Fase 3 */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center text-white font-bold">
                3
              </div>
              <h2 className="text-2xl font-bold text-gray-900 m-0">🧮 Fase 3: Cálculo de Límites</h2>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 mb-8">
              <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-xl border border-orange-200 mb-6">
                <h3 className="text-xl font-bold text-orange-900 mb-4">Análisis de Límites</h3>
                <div className="text-center mb-4">
                  <div className="text-2xl font-mono font-bold text-orange-900 mb-2">
                    lim<sub>t→0</sub> v(t) = 0
                  </div>
                  <p className="text-orange-700">(La patineta parte desde el reposo)</p>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                  <Info className="w-5 h-5" />
                  Interpretación
                </h4>
                <p className="text-blue-800 leading-relaxed">
                  La velocidad inicial es cero, lo que tiene sentido físico si el objeto parte desde reposo. 
                  Este límite confirma que nuestro modelo matemático es coherente con la realidad física del problema.
                </p>
              </div>
            </div>
          </section>

          {/* Fase 4 */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center text-white font-bold">
                4
              </div>
              <h2 className="text-2xl font-bold text-gray-900 m-0">📉 Fase 4: Derivadas y Aplicaciones</h2>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 mb-8">
              <h3 className="text-xl font-bold text-teal-900 mb-6">Derivada:</h3>
              
              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-xl border border-teal-200 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-mono font-bold text-teal-900 mb-2">
                    v'(t) = -t + 4
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                  <h4 className="font-semibold text-blue-900 mb-3">Interpretación:</h4>
                  <ul className="space-y-2 text-blue-800">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>v'(t) representa la aceleración de la patineta</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>La aceleración es máxima al inicio, pero disminuye conforme pasa el tiempo</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                  <h4 className="font-semibold text-green-900 mb-3">Punto crítico:</h4>
                  <div className="text-center mb-3">
                    <div className="text-xl font-mono font-bold text-green-900">
                      v'(t) = 0 ⇒ t = 4 ⇒ velocidad máxima en t = 4s
                    </div>
                  </div>
                  <p className="text-green-800 text-center">
                    En t = 4 segundos, la patineta alcanza su velocidad máxima de {calculateFunction(4).toFixed(1)} m/s
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
                  <h4 className="text-lg font-semibold text-purple-900 mb-4">Calculadora Interactiva</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Tiempo (t)</label>
                      <input 
                        type="number" 
                        value={timeValue}
                        onChange={(e) => setTimeValue(Number(e.target.value))}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                        step="0.1"
                        min="0"
                        max="8"
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="bg-teal-50 p-3 rounded-lg border border-teal-200">
                        <span className="text-sm text-teal-700">Velocidad v(t):</span>
                        <span className="ml-2 font-mono text-lg text-teal-900">{calculateFunction(timeValue).toFixed(2)} m/s</span>
                      </div>
                      <div className="bg-orange-50 p-3 rounded-lg border border-orange-200">
                        <span className="text-sm text-orange-700">Aceleración v'(t):</span>
                        <span className="ml-2 font-mono text-lg text-orange-900">{calculateDerivative(timeValue).toFixed(2)} m/s²</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Fase 5 */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold">
                5
              </div>
              <h2 className="text-2xl font-bold text-gray-900 m-0">🤖 Fase 5: Visualización con IA</h2>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 mb-8">
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                    <h4 className="font-semibold text-green-900 mb-3 flex items-center gap-2">
                      <Brain className="w-5 h-5" />
                      Uso de ChatGPT
                    </h4>
                    <p className="text-green-800 text-sm mb-3">Se solicitó:</p>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Derivada paso a paso</li>
                      <li>• Interpretación del punto crítico</li>
                      <li>• Consejos sobre cómo graficar en GeoGebra</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
                    <h4 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                      <BarChart3 className="w-5 h-5" />
                      Uso de Excel con IA
                    </h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Se simuló una tabla de velocidad vs. tiempo</li>
                      <li>• Se usó una regresión cuadrática para validar la función</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
                  <h4 className="font-semibold text-purple-900 mb-3 flex items-center gap-2">
                    <LineChart className="w-5 h-5" />
                    GeoGebra
                  </h4>
                  <ul className="text-sm text-purple-700 space-y-1 mb-4">
                    <li>• Se graficó la función v(t) y su derivada</li>
                    <li>• Se marcó el máximo</li>
                    <li>• Visualización interactiva de conceptos</li>
                  </ul>
                  
                  <div className="bg-white p-4 rounded-lg border border-purple-100">
                    <h5 className="font-medium text-purple-900 mb-2">Herramientas adicionales:</h5>
                    <div className="flex items-center gap-2 text-sm text-purple-700">
                      <Calculator className="w-4 h-4" />
                      <span>WolframAlpha para verificación</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-violet-50 to-purple-50 p-6 rounded-xl border border-violet-200">
                <h4 className="text-lg font-semibold text-violet-900 mb-4 flex items-center gap-2">
                  <Play className="w-5 h-5" />
                  Simulación Interactiva Estilo PhET
                </h4>
                
                <div className="flex items-center gap-4 mb-6">
                  <button 
                    onClick={() => setIsAnimating(!isAnimating)}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-lg hover:from-violet-700 hover:to-purple-700 transition-all shadow-lg"
                  >
                    {isAnimating ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    {isAnimating ? 'Pausar Simulación' : 'Iniciar Simulación'}
                  </button>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Info className="w-4 h-4" />
                    <span>Simulación física interactiva del movimiento</span>
                  </div>
                </div>
                
                <PhETStyleSimulation 
                  isAnimating={isAnimating} 
                  animationTime={animationTime}
                  calculateFunction={calculateFunction}
                  calculateDerivative={calculateDerivative}
                />
              </div>
            </div>
          </section>

          {/* Conclusiones */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-8 rounded-2xl shadow-xl">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <CheckCircle className="w-8 h-8 text-green-400" />
                Conclusiones del Proyecto
              </h2>
              <div className="space-y-4 text-gray-200">
                <p className="leading-relaxed">
                  Este proyecto demostró exitosamente la aplicación práctica del cálculo diferencial en el análisis 
                  de fenómenos reales, específicamente el movimiento de una patineta eléctrica.
                </p>
                <p className="leading-relaxed">
                  La integración de herramientas de IA como ChatGPT, GeoGebra, Excel y WolframAlpha permitió 
                  una comprensión más profunda de los conceptos matemáticos y facilitó la visualización 
                  interactiva de los resultados.
                </p>
                <p className="leading-relaxed">
                  El modelo cuadrático v(t) = -0.5t² + 4t proporcionó una representación precisa del 
                  comportamiento de la velocidad, con un punto máximo claramente identificado en t = 4 segundos.
                </p>
              </div>
            </div>
          </section>

        </article>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <Calculator className="w-5 h-5" />
            <span>Proyecto de Cálculo Diferencial con IA</span>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Plantilla interactiva para análisis matemático con herramientas de inteligencia artificial
          </p>
        </div>
      </footer>
    </div>
  );
}

function FunctionGraph({ timeValue }: { timeValue: number }) {
  const width = 600;
  const height = 400;
  const margin = { top: 40, right: 40, bottom: 60, left: 80 };
  const plotWidth = width - margin.left - margin.right;
  const plotHeight = height - margin.top - margin.bottom;

  // Generate points for the function
  const points = [];
  for (let t = 0; t <= 8; t += 0.1) {
    const v = -0.5 * t * t + 4 * t;
    points.push({ t, v });
  }

  // Scale functions
  const xScale = (t: number) => (t / 8) * plotWidth;
  const yScale = (v: number) => plotHeight - (v / 8) * plotHeight;

  const currentV = -0.5 * timeValue * timeValue + 4 * timeValue;
  const maxT = 4;
  const maxV = 8;

  return (
    <div className="w-full bg-white rounded-xl border border-gray-200 p-6">
      <svg width={width} height={height} className="mx-auto">
        {/* Background */}
        <rect width={width} height={height} fill="#fafafa" />
        
        {/* Plot area */}
        <g transform={`translate(${margin.left}, ${margin.top})`}>
          {/* Grid lines */}
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(t => (
            <line
              key={`grid-v-${t}`}
              x1={xScale(t)}
              y1={0}
              x2={xScale(t)}
              y2={plotHeight}
              stroke="#e5e7eb"
              strokeDasharray="2,2"
            />
          ))}
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(v => (
            <line
              key={`grid-h-${v}`}
              x1={0}
              y1={yScale(v)}
              x2={plotWidth}
              y2={yScale(v)}
              stroke="#e5e7eb"
              strokeDasharray="2,2"
            />
          ))}
          
          {/* Axes */}
          <line x1={0} y1={plotHeight} x2={plotWidth} y2={plotHeight} stroke="#374151" strokeWidth="2" />
          <line x1={0} y1={0} x2={0} y2={plotHeight} stroke="#374151" strokeWidth="2" />
          
          {/* Function curve */}
          <path
            d={`M ${points.map(p => `${xScale(p.t)},${yScale(Math.max(0, p.v))}`).join(' L ')}`}
            fill="none"
            stroke="#3b82f6"
            strokeWidth="3"
          />
          
          {/* Current point */}
          <circle
            cx={xScale(timeValue)}
            cy={yScale(Math.max(0, currentV))}
            r="6"
            fill="#ef4444"
            stroke="white"
            strokeWidth="2"
          />
          
          {/* Maximum point */}
          <circle
            cx={xScale(maxT)}
            cy={yScale(maxV)}
            r="6"
            fill="#10b981"
            stroke="white"
            strokeWidth="2"
          />
          
          {/* Axis labels */}
          {[0, 2, 4, 6, 8].map(t => (
            <text
              key={`x-label-${t}`}
              x={xScale(t)}
              y={plotHeight + 20}
              textAnchor="middle"
              fontSize="12"
              fill="#6b7280"
            >
              {t}
            </text>
          ))}
          {[0, 2, 4, 6, 8].map(v => (
            <text
              key={`y-label-${v}`}
              x={-15}
              y={yScale(v) + 4}
              textAnchor="middle"
              fontSize="12"
              fill="#6b7280"
            >
              {v}
            </text>
          ))}
          
          {/* Point labels */}
          <text
            x={xScale(timeValue)}
            y={yScale(Math.max(0, currentV)) - 15}
            textAnchor="middle"
            fontSize="12"
            fill="#ef4444"
            fontWeight="bold"
          >
            ({timeValue.toFixed(1)}, {currentV.toFixed(1)})
          </text>
          
          <text
            x={xScale(maxT)}
            y={yScale(maxV) - 15}
            textAnchor="middle"
            fontSize="12"
            fill="#10b981"
            fontWeight="bold"
          >
            Máximo (4, 8)
          </text>
        </g>
        
        {/* Axis titles */}
        <text
          x={width / 2}
          y={height - 10}
          textAnchor="middle"
          fontSize="14"
          fontWeight="bold"
          fill="#374151"
        >
          Tiempo (segundos)
        </text>
        <text
          x={20}
          y={height / 2}
          textAnchor="middle"
          fontSize="14"
          fontWeight="bold"
          fill="#374151"
          transform={`rotate(-90, 20, ${height / 2})`}
        >
          Velocidad (m/s)
        </text>
        
        {/* Title */}
        <text
          x={width / 2}
          y={25}
          textAnchor="middle"
          fontSize="16"
          fontWeight="bold"
          fill="#1f2937"
        >
          v(t) = -0.5t² + 4t
        </text>
      </svg>
    </div>
  );
}

function PhETStyleSimulation({ 
  isAnimating, 
  animationTime, 
  calculateFunction, 
  calculateDerivative 
}: { 
  isAnimating: boolean;
  animationTime: number;
  calculateFunction: (t: number) => number;
  calculateDerivative: (t: number) => number;
}) {
  const currentV = calculateFunction(animationTime);
  const currentA = calculateDerivative(animationTime);

  return (
    <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl p-6 border-2 border-blue-200">
      {/* Control Panel */}
      <div className="bg-white rounded-lg p-4 mb-6 shadow-lg border border-gray-200">
        <div className="grid grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-sm font-semibold text-gray-600 mb-1">Tiempo</div>
            <div className="text-2xl font-mono font-bold text-blue-600">{animationTime.toFixed(1)}s</div>
          </div>
          <div className="text-center">
            <div className="text-sm font-semibold text-gray-600 mb-1">Velocidad</div>
            <div className="text-2xl font-mono font-bold text-green-600">{currentV.toFixed(2)} m/s</div>
          </div>
          <div className="text-center">
            <div className="text-sm font-semibold text-gray-600 mb-1">Aceleración</div>
            <div className="text-2xl font-mono font-bold text-orange-600">{currentA.toFixed(2)} m/s²</div>
          </div>
          <div className="text-center">
            <div className="text-sm font-semibold text-gray-600 mb-1">Estado</div>
            <div className="text-lg font-bold text-purple-600">
              {currentA > 0 ? 'Acelerando' : currentA < 0 ? 'Desacelerando' : 'Velocidad Máx'}
            </div>
          </div>
        </div>
      </div>

      {/* Main Simulation Area */}
      <div className="bg-gradient-to-b from-sky-200 to-green-200 rounded-lg p-6 relative overflow-hidden min-h-96 border-2 border-gray-300">
        {/* Background elements */}
        <div className="absolute inset-0">
          {/* Sky gradient */}
          <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-blue-300 to-blue-200"></div>
          {/* Ground */}
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-b from-green-300 to-green-400"></div>
          {/* Clouds */}
          <div className="absolute top-8 left-16 w-16 h-8 bg-white rounded-full opacity-70"></div>
          <div className="absolute top-12 right-20 w-12 h-6 bg-white rounded-full opacity-60"></div>
          {/* Trees */}
          <div className="absolute bottom-20 left-8 w-4 h-16 bg-amber-800 rounded-sm"></div>
          <div className="absolute bottom-28 left-6 w-8 h-8 bg-green-600 rounded-full"></div>
          <div className="absolute bottom-20 right-12 w-4 h-16 bg-amber-800 rounded-sm"></div>
          <div className="absolute bottom-28 right-10 w-8 h-8 bg-green-600 rounded-full"></div>
        </div>

        {/* Track/Road */}
        <div className="absolute bottom-16 left-0 right-0 h-8 bg-gray-600 shadow-inner">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"></div>
          {/* Road markings */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-yellow-300 transform -translate-y-1/2"></div>
        </div>

        {/* Distance markers */}
        {[0, 2, 4, 6, 8].map(t => (
          <div 
            key={t}
            className="absolute bottom-8 text-xs font-bold text-gray-700 transform -translate-x-1/2"
            style={{ left: `${10 + (t / 8) * 80}%` }}
          >
            {t}s
          </div>
        ))}

        {/* Skateboard */}
        <div 
          className="absolute bottom-20 transition-all duration-100 transform -translate-x-1/2"
          style={{
            left: `${10 + (animationTime / 8) * 80}%`,
            transform: `translateX(-50%) ${currentV > 0 ? 'rotate(-1deg)' : 'rotate(0deg)'}`
          }}
        >
          {/* Skateboard body */}
          <div className="relative w-16 h-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg shadow-lg">
            {/* Wheels */}
            <div className="absolute -bottom-2 left-1 w-4 h-4 bg-gray-800 rounded-full shadow-md"></div>
            <div className="absolute -bottom-2 right-1 w-4 h-4 bg-gray-800 rounded-full shadow-md"></div>
            {/* Deck details */}
            <div className="absolute top-1 left-2 right-2 h-0.5 bg-white opacity-50 rounded"></div>
            <div className="absolute bottom-1 left-2 right-2 h-0.5 bg-white opacity-50 rounded"></div>
          </div>

          {/* Speed lines */}
          {currentV > 1 && (
            <div className="absolute right-full top-1/2 transform -translate-y-1/2 flex gap-1">
              {[...Array(Math.min(6, Math.floor(currentV / 1.5)))].map((_, i) => (
                <div 
                  key={i}
                  className="w-2 h-0.5 bg-blue-400 rounded opacity-70"
                  style={{ 
                    animationDelay: `${i * 0.1}s`,
                    transform: `scaleX(${1 - i * 0.15})`
                  }}
                ></div>
              ))}
            </div>
          )}
        </div>

        {/* Velocity Vector */}
        {currentV > 0 && (
          <div 
            className="absolute bottom-32 transform -translate-x-1/2"
            style={{ left: `${10 + (animationTime / 8) * 80}%` }}
          >
            <div className="flex items-center">
              <div 
                className="h-1 bg-green-500 rounded"
                style={{ width: `${Math.min(60, currentV * 7)}px` }}
              ></div>
              <div className="w-0 h-0 border-l-4 border-l-green-500 border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
            </div>
            <div className="text-xs font-bold text-green-700 mt-1">v = {currentV.toFixed(1)} m/s</div>
          </div>
        )}

        {/* Acceleration Vector */}
        {Math.abs(currentA) > 0.1 && (
          <div 
            className="absolute bottom-40 transform -translate-x-1/2"
            style={{ left: `${10 + (animationTime / 8) * 80}%` }}
          >
            <div className="flex items-center">
              <div 
                className={`h-1 rounded ${currentA > 0 ? 'bg-orange-500' : 'bg-red-500'}`}
                style={{ width: `${Math.min(40, Math.abs(currentA) * 8)}px` }}
              ></div>
              <div className={`w-0 h-0 border-l-4 border-t-2 border-b-2 border-t-transparent border-b-transparent ${
                currentA > 0 ? 'border-l-orange-500' : 'border-l-red-500'
              }`}></div>
            </div>
            <div className={`text-xs font-bold mt-1 ${currentA > 0 ? 'text-orange-700' : 'text-red-700'}`}>
              a = {currentA.toFixed(1)} m/s²
            </div>
          </div>
        )}

        {/* Maximum point indicator */}
        {Math.abs(animationTime - 4) < 0.3 && (
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-lg shadow-lg animate-bounce border-2 border-yellow-600">
            <div className="text-sm font-bold">¡Velocidad Máxima!</div>
            <div className="text-xs">8.0 m/s en t = 4s</div>
          </div>
        )}

        {/* Real-time graph overlay */}
        <div className="absolute top-4 right-4 bg-white bg-opacity-90 p-3 rounded-lg shadow-lg border border-gray-300">
          <div className="text-xs font-bold text-gray-700 mb-2">Gráfica en Tiempo Real</div>
          <svg width="120" height="80" className="border border-gray-200">
            {/* Mini graph of function */}
            <path
              d={`M ${Array.from({length: 81}, (_, i) => {
                const t = i * 0.1;
                const v = -0.5 * t * t + 4 * t;
                return `${(t / 8) * 120},${80 - (Math.max(0, v) / 8) * 80}`;
              }).join(' L ')}`}
              fill="none"
              stroke="#3b82f6"
              strokeWidth="1"
            />
            {/* Current point */}
            <circle
              cx={(animationTime / 8) * 120}
              cy={80 - (Math.max(0, currentV) / 8) * 80}
              r="2"
              fill="#ef4444"
            />
          </svg>
        </div>
      </div>

      {/* Status indicators */}
      <div className="mt-4 flex justify-center gap-4">
        <div className={`px-3 py-1 rounded-full text-xs font-bold ${
          isAnimating ? 'bg-green-200 text-green-800' : 'bg-gray-200 text-gray-600'
        }`}>
          {isAnimating ? '● EN MOVIMIENTO' : '● PAUSADO'}
        </div>
        <div className={`px-3 py-1 rounded-full text-xs font-bold ${
          Math.abs(animationTime - 4) < 0.2 ? 'bg-yellow-200 text-yellow-800' : 'bg-blue-200 text-blue-800'
        }`}>
          {Math.abs(animationTime - 4) < 0.2 ? '★ PUNTO CRÍTICO' : '→ SIMULANDO'}
        </div>
      </div>
    </div>
  );
}

export default App;