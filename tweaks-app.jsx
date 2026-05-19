/* TweaksApp — depends on tweaks-panel.jsx being loaded first */
const { useEffect } = React;

function applyTweaks(t) {
  const root = document.documentElement;
  root.style.setProperty("--accent", t.accent);
  root.style.setProperty("--bg", t.bg);
  root.style.setProperty("--content", t.content + "px");
  root.style.setProperty("--head-font", `"${t.headFont}", system-ui, sans-serif`);
}

function TweaksApp() {
  const [t, setTweak] = useTweaks(window.TWEAK_DEFAULTS);
  useEffect(() => { applyTweaks(t); }, [t]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection title="Цвета">
        <TweakColor
          label="Акцент"
          value={t.accent}
          onChange={v => setTweak("accent", v)}
          options={["#e8732c", "#c94d2b", "#e0a04a", "#7f8a52"]}
        />
        <TweakColor
          label="Фон"
          value={t.bg}
          onChange={v => setTweak("bg", v)}
          options={["#3d3a38", "#2a2826", "#44403d", "#1f1d1c"]}
        />
      </TweakSection>
      <TweakSection title="Типографика">
        <TweakSelect
          label="Шрифт заголовков"
          value={t.headFont}
          onChange={v => setTweak("headFont", v)}
          options={[
            { value: "Unbounded", label: "Unbounded" },
            { value: "Inter",     label: "Inter" },
            { value: "Cormorant", label: "Cormorant" },
            { value: "Manrope",   label: "Manrope" },
          ]}
        />
      </TweakSection>
      <TweakSection title="Сетка">
        <TweakSlider
          label="Ширина контента"
          value={t.content}
          onChange={v => setTweak("content", v)}
          min={560} max={1080} step={10}
          unit="px"
        />
      </TweakSection>
    </TweaksPanel>
  );
}

ReactDOM.createRoot(document.getElementById("tweaks-root")).render(<TweaksApp />);
