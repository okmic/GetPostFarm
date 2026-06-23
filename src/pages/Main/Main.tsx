import { FaRocket, FaRobot, FaChartLine, FaTelegram, FaArrowRight, FaCrown, FaGem, FaLeaf } from "react-icons/fa"
import { FiZap, FiTarget } from "react-icons/fi"
import { Link } from "react-router-dom"
import { Logo } from "../../components/Logo/Logo"
import "./styles.css"

export default function MainPage() {
    return (
        <div className="flex flex-col items-center justify-start overflow-hidden">
            <section className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 pt-12 sm:pt-24 lg:pt-28 pb-16 sm:pb-24 text-center">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[120px] opacity-[0.04] bg-[#4CAF50] pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full blur-[100px] opacity-[0.03] bg-[#FFA726] pointer-events-none" />

                <div className="relative">
                    <div className="flex justify-center mb-8 sm:mb-10">
                        <Logo size='xl' />
                    </div>

                    <h1 className="text-3xl sm:text-5xl lg:text-7xl font-thin text-white tracking-[-0.03em] leading-[1.05] mb-4 sm:mb-6">
                        Выращивайте
                        <br />
                        <span className="font-light text-white/40">контент автоматически</span>
                    </h1>

                    <p className="text-sm sm:text-base text-white/25 max-w-lg mx-auto leading-relaxed mb-10 sm:mb-12 font-light px-2">
                        PostFarm — AI-инструменты для создания постов, заголовков и идей.
                        Генерируйте контент для Telegram-каналов за секунды.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                        <a
                            href="https://admin.postfarm.ru"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#4CAF50] to-[#FFA726] text-white font-medium transition-colors hover:shadow-[0_0_20px_rgba(76,175,80,0.3)]"
                        >
                            <FaChartLine className="text-sm" />
                            Админ-панель
                            <FaArrowRight className="text-sm" />
                        </a>
                    </div>

                    <div className="mt-16 sm:mt-20 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-[10px] sm:text-[11px] text-white/15">
                        <div className="flex items-center gap-2">
                            <FiZap className="text-[#4CAF50] text-sm" />
                            <span>4 AI-инструмента</span>
                        </div>
                        <div className="w-1 h-1 rounded-full bg-white/10" />
                        <div className="flex items-center gap-2">
                            <FaTelegram className="text-[#4CAF50] text-sm" />
                            <span>Для канала блога</span>
                        </div>
                        <div className="w-1 h-1 rounded-full bg-white/10" />
                        <div className="flex items-center gap-2">
                            <FaChartLine className="text-[#4CAF50] text-sm" />
                            <span>Статистика</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 pb-16 sm:pb-28">
                <div className="text-center mb-10 sm:mb-14">
                    <p className="text-[10px] sm:text-[11px] text-[#4CAF50]/60 uppercase tracking-[0.2em] mb-3">процесс</p>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white tracking-[-0.02em] mb-3">
                        Как это работает
                    </h2>
                    <p className="text-sm text-white/20 max-w-md mx-auto font-light">
                        Три шага от идеи до готового поста
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-5">
                    {[
                        { step: "1", icon: <FiTarget className="text-lg" />, title: "Выберите инструмент", desc: "Заголовки, хуки, CTA, обучающие посты — всё для вовлечения аудитории" },
                        { step: "2", icon: <FiZap className="text-lg" />, title: "Введите тему", desc: "Опишите о чём пост. AI проанализирует контекст и подберёт лучший формат" },
                        { step: "3", icon: <FaRocket className="text-lg" />, title: "Получите результат", desc: "Готовый пост за секунды. Копируйте, публикуйте, наблюдайте рост" },
                    ].map((item, i) => (
                        <div key={i} className="relative rounded-2xl bg-white/[0.02] border border-white/[0.04] p-5 sm:p-6 text-center group transition-colors hover:bg-white/[0.04] hover:border-white/[0.06]">
                            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#4CAF50]/10 flex items-center justify-center mx-auto mb-4">
                                <span className="text-[#4CAF50]">{item.icon}</span>
                            </div>
                            <div className="absolute -top-2.5 -left-2.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#4CAF50] flex items-center justify-center text-[10px] sm:text-xs font-bold text-white shadow-lg shadow-[#4CAF50]/20">
                                {item.step}
                            </div>
                            <h3 className="text-sm sm:text-base font-light text-white mb-2">{item.title}</h3>
                            <p className="text-xs sm:text-sm text-white/25 leading-relaxed font-light">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Инструменты */}
            <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 pb-16 sm:pb-28">
                <div className="text-center mb-10 sm:mb-14">
                    <p className="text-[10px] sm:text-[11px] text-[#4CAF50]/60 uppercase tracking-[0.2em] mb-3">сервисы</p>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white tracking-[-0.02em] mb-3">
                        Инструменты
                    </h2>
                    <p className="text-sm text-white/20 max-w-md mx-auto font-light">
                        Четыре AI-сервиса для вашего контента
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {[
                        { icon: <FaRobot className="text-lg" />, color: "#26A5E4", title: "Контент канала", desc: "Готовые посты, идеи, опросы и серии. Экономит 3 часа в день.", tag: "Популярно" },
                        { icon: <FiTarget className="text-lg" />, color: "#FF7043", title: "Цепляющие заголовки", desc: "Заголовки с высоким CTR, хуки и вирусные механики.", tag: "Вовлечение" },
                        { icon: <FaGem className="text-lg" />, color: "#8B5CF6", title: "Обучающие посты", desc: "Гайды, уроки и объяснения сложного простыми словами.", tag: "Обучение" },
                        { icon: <FaLeaf className="text-lg" />, color: "#FFA726", title: "Хроника постов", desc: "AI изучает ваш стиль и пишет продолжение за вас.", tag: "Новое" },
                    ].map((item, i) => (
                        <Link
                            key={i}
                            to="/services"
                            className="rounded-2xl bg-white/[0.02] border border-white/[0.04] p-4 sm:p-5 flex items-start gap-3 sm:gap-4 group transition-colors hover:bg-white/[0.04] hover:border-white/[0.08]"
                        >
                            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105" style={{ backgroundColor: `${item.color}18` }}>
                                <span style={{ color: item.color }}>{item.icon}</span>
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                    <h3 className="text-sm sm:text-base font-light text-white">{item.title}</h3>
                                    <span className="text-[9px] sm:text-[10px] text-white/20 border border-white/[0.06] rounded-md px-1.5 py-0.5 flex-shrink-0">{item.tag}</span>
                                </div>
                                <p className="text-xs sm:text-sm text-white/25 leading-relaxed font-light">{item.desc}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Тарифы */}
            <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 pb-16 sm:pb-28">
                <div className="text-center mb-10 sm:mb-14">
                    <p className="text-[10px] sm:text-[11px] text-[#FFA726]/60 uppercase tracking-[0.2em] mb-3">тарифы</p>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white tracking-[-0.02em] mb-3">
                        Тарифы
                    </h2>
                    <p className="text-sm text-white/20 max-w-md mx-auto font-light">
                        От новичка до профессионала — выберите свой уровень
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3">
                    {[
                        { icon: <FaRocket />, color: "#26A5E4", name: "Росток", limit: 3, stars: 1 },
                        { icon: <FaLeaf />, color: "#34D399", name: "Колос", limit: 10, stars: 2 },
                        { icon: <FaGem />, color: "#4CAF50", name: "Урожай", limit: 50, stars: 3 },
                        { icon: <FaRobot />, color: "#FFA726", name: "Агроном", limit: 100, stars: 4 },
                        { icon: <FaCrown />, color: "#F59E0B", name: "Pro", limit: "∞", stars: 5 },
                    ].map((item, i) => (
                        <div key={i} className="rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/[0.04] p-3 sm:p-4 text-center transition-colors hover:bg-white/[0.04] hover:border-white/[0.08]">
                            <span style={{ color: item.color }} className="text-xl sm:text-2xl mb-1.5 sm:mb-2 block">{item.icon}</span>
                            <p className="text-[11px] sm:text-xs text-white/80 font-medium mb-0.5">{item.name}</p>
                            <p className="text-[10px] sm:text-[11px] text-white/30 mb-2 sm:mb-3">{item.limit}/день</p>
                            <div className="flex justify-center gap-0.5">
                                {Array.from({ length: 5 }, (_, s) => (
                                    <div key={s} className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full ${s < item.stars ? '' : 'bg-white/10'}`} style={s < item.stars ? { backgroundColor: item.color } : {}} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-6 sm:mt-8">
                    <p className="text-[10px] sm:text-[11px] text-white/20">
                        Для уточнения стоимости пишите на{" "}
                        <a href="mailto:miconext@yandex.ru" className="text-[#4CAF50] hover:text-[#66BB6A] transition-colors underline underline-offset-2">miconext@yandex.ru</a>
                    </p>
                </div>
            </section>

            {/* Админ-панель */}
            <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 pb-16 sm:pb-28">
                <div className="relative rounded-2xl sm:rounded-3xl bg-white/[0.03] border border-white/[0.08] p-6 sm:p-10 lg:p-14 text-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#4CAF50]/5 to-transparent" />
                    <div className="absolute top-0 right-0 w-80 h-80 rounded-full blur-[80px] opacity-[0.04] bg-[#4CAF50] pointer-events-none" />

                    <div className="relative">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#4CAF50]/10 border border-[#4CAF50]/20 flex items-center justify-center mx-auto mb-5 sm:mb-6">
                            <FaChartLine className="text-xl sm:text-2xl text-[#4CAF50]" />
                        </div>
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-light text-white tracking-[-0.02em] mb-3">
                            Админ-панель
                        </h2>
                        <p className="text-sm sm:text-base text-white/25 max-w-md mx-auto leading-relaxed mb-6 sm:mb-8 font-light">
                            Управляйте каналами, отслеживайте статистику и синхронизируйте контент через удобную админ-панель.
                        </p>
                        <a
                            href="https://admin.postfarm.ru"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-[#4CAF50] to-[#FFA726] text-white font-medium text-sm sm:text-base transition-colors hover:shadow-[0_0_20px_rgba(76,175,80,0.3)]"
                        >
                            <FaChartLine className="text-sm" />
                            Открыть admin.postfarm.ru
                            <FaArrowRight className="text-sm" />
                        </a>
                    </div>
                </div>
            </section>

            <footer className="w-full border-t border-white/[0.04] py-6 sm:py-8">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
                    <div className="flex items-center gap-2 text-[10px] sm:text-[11px] text-white/15">
                        <FaTelegram className="text-sm" />
                        <span>ПостФерма • Выращиваем контент автоматически</span>
                    </div>
                    <div className="flex items-center gap-4 text-[10px] sm:text-[11px] text-white/15">
                        <a href="mailto:miconext@yandex.ru" className="hover:text-white/30 transition-colors">miconext@yandex.ru</a>
                        <a href="https://admin.postfarm.ru" target="_blank" rel="noopener noreferrer" className="hover:text-white/30 transition-colors">admin.postfarm.ru</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}