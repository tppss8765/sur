"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus, Trash2, Edit3, Check, X, Eye, EyeOff,
  Lock, LogOut, Search, ChevronDown, Save, UploadCloud, TrendingUp, Package, AlertCircle
} from "lucide-react";
import { DEFAULT_MENU_ITEMS, MENU_CATEGORIES, CATEGORY_LABELS } from "@/data/menu";
import type { MenuItem } from "@/data/menu";

const ADMIN_PASSWORD = "suresh2024";
const STORAGE_KEY = "svf_menu_items";

// ── helpers ────────────────────────────────────────────────────────────────
function loadItems(): MenuItem[] {
  if (typeof window === "undefined") return DEFAULT_MENU_ITEMS;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : DEFAULT_MENU_ITEMS;
  } catch {
    return DEFAULT_MENU_ITEMS;
  }
}
function saveItems(items: MenuItem[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

const EMPTY_ITEM: Omit<MenuItem, "id"> = {
  name: "", category: "juice", price: 0,
  description: "", photo: "", available: true, tags: [],
};

// ── sub-components ─────────────────────────────────────────────────────────
function StatCard({ label, value, icon: Icon, color }: { label: string; value: string | number; icon: React.ElementType; color: string }) {
  return (
    <div className={`rounded-2xl p-6 border ${color}`}>
      <div className="flex items-center justify-between mb-3">
        <span className="font-mono text-xs uppercase tracking-widest opacity-60">{label}</span>
        <Icon className="h-4 w-4 opacity-50" />
      </div>
      <p className="font-display text-3xl font-semibold">{value}</p>
    </div>
  );
}

function ItemRow({
  item, onEdit, onDelete, onToggle,
}: {
  item: MenuItem;
  onEdit: (item: MenuItem) => void;
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
}) {
  const [confirmDel, setConfirmDel] = useState(false);
  return (
    <motion.tr
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`border-b border-ink/6 text-sm transition-colors ${item.available ? "" : "opacity-50"}`}
    >
      <td className="py-3 pr-4 w-16">
        {item.photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={item.photo} alt={item.name} className="h-12 w-12 rounded-xl object-cover" />
        ) : (
          <div className="h-12 w-12 rounded-xl bg-cream-dim flex items-center justify-center">
            <Package className="h-5 w-5 text-ink/30" />
          </div>
        )}
      </td>
      <td className="py-3 pr-4">
        <p className="font-semibold text-ink">{item.name}</p>
        <p className="text-ink/45 text-xs font-mono mt-0.5 max-w-xs truncate">{item.description}</p>
      </td>
      <td className="py-3 pr-4 hidden sm:table-cell">
        <span className="px-2.5 py-1 rounded-full text-[0.65rem] font-mono uppercase tracking-wide bg-ink/6 text-ink/60">
          {CATEGORY_LABELS[item.category] || item.category}
        </span>
      </td>
      <td className="py-3 pr-4 font-mono text-base font-bold text-ink">₹{item.price}</td>
      <td className="py-3 pr-4">
        <button
          onClick={() => onToggle(item.id)}
          title={item.available ? "Mark unavailable" : "Mark available"}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-semibold transition-colors ${
            item.available
              ? "bg-lime/15 text-lime-deep hover:bg-lime/25"
              : "bg-ink/8 text-ink/40 hover:bg-ink/12"
          }`}
        >
          {item.available ? <Eye className="h-3 w-3" /> : <EyeOff className="h-3 w-3" />}
          {item.available ? "Live" : "Hidden"}
        </button>
      </td>
      <td className="py-3">
        <div className="flex items-center gap-2">
          <button
            onClick={() => onEdit(item)}
            className="p-2 rounded-xl hover:bg-papaya/10 text-ink/50 hover:text-papaya transition-colors"
            title="Edit"
          >
            <Edit3 className="h-4 w-4" />
          </button>
          {confirmDel ? (
            <div className="flex items-center gap-1">
              <button
                onClick={() => onDelete(item.id)}
                className="p-2 rounded-xl bg-red-500 text-white"
                title="Confirm delete"
              >
                <Check className="h-4 w-4" />
              </button>
              <button
                onClick={() => setConfirmDel(false)}
                className="p-2 rounded-xl bg-ink/8 text-ink/50"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => setConfirmDel(true)}
              className="p-2 rounded-xl hover:bg-red-50 text-ink/40 hover:text-red-500 transition-colors"
              title="Delete"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          )}
        </div>
      </td>
    </motion.tr>
  );
}

// ── Main page ──────────────────────────────────────────────────────────────
export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [pw, setPw] = useState("");
  const [pwError, setPwError] = useState(false);
  const [items, setItems] = useState<MenuItem[]>([]);
  const [search, setSearch] = useState("");
  const [catFilter, setCatFilter] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [editItem, setEditItem] = useState<MenuItem | null>(null);
  const [draft, setDraft] = useState<Omit<MenuItem, "id">>(EMPTY_ITEM);
  const [saved, setSaved] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);

  // Load from localStorage on mount
  useEffect(() => {
    const wasAuthed = sessionStorage.getItem("svf_admin") === "1";
    if (wasAuthed) {
      setAuthed(true);
      setItems(loadItems());
    }
  }, []);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (pw === ADMIN_PASSWORD) {
      sessionStorage.setItem("svf_admin", "1");
      setAuthed(true);
      setItems(loadItems());
      setPwError(false);
    } else {
      setPwError(true);
    }
  }

  function handleLogout() {
    sessionStorage.removeItem("svf_admin");
    setAuthed(false);
    setItems([]);
  }

  function persistItems(next: MenuItem[]) {
    setItems(next);
    saveItems(next);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  function openAdd() {
    setEditItem(null);
    setDraft(EMPTY_ITEM);
    setShowModal(true);
    setTimeout(() => nameRef.current?.focus(), 80);
  }

  function openEdit(item: MenuItem) {
    setEditItem(item);
    setDraft({ ...item });
    setShowModal(true);
    setTimeout(() => nameRef.current?.focus(), 80);
  }

  function handleSave() {
    if (!draft.name.trim() || draft.price <= 0) return;
    if (editItem) {
      persistItems(items.map((i) => (i.id === editItem.id ? { ...draft, id: editItem.id } : i)));
    } else {
      const newItem: MenuItem = { ...draft, id: `custom_${Date.now()}` };
      persistItems([...items, newItem]);
    }
    setShowModal(false);
  }

  function handleDelete(id: string) {
    persistItems(items.filter((i) => i.id !== id));
  }

  function handleToggle(id: string) {
    persistItems(items.map((i) => (i.id === id ? { ...i, available: !i.available } : i)));
  }

  function resetToDefault() {
    if (!confirm("Reset all items to default? Custom items will be lost.")) return;
    persistItems(DEFAULT_MENU_ITEMS);
  }

  const filtered = items.filter((i) => {
    const matchCat = catFilter === "all" || i.category === catFilter;
    const matchQ = !search || i.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchQ;
  });

  const stats = {
    total: items.length,
    live: items.filter((i) => i.available).length,
    hidden: items.filter((i) => !i.available).length,
    avgPrice: items.length ? Math.round(items.reduce((s, i) => s + i.price, 0) / items.length) : 0,
  };

  // ── Login screen ──────────────────────────────────────────────────────────
  if (!authed) {
    return (
      <div className="min-h-screen bg-ink flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-sm"
        >
          <div className="text-center mb-8">
            <div className="flex h-16 w-16 mx-auto items-center justify-center rounded-2xl bg-papaya mb-5">
              <Lock className="h-7 w-7 text-cream" />
            </div>
            <h1 className="font-display text-2xl font-semibold text-cream">Admin Panel</h1>
            <p className="text-cream/40 text-sm mt-1 font-mono">Suresh Veg &amp; Fruits</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="password"
                value={pw}
                onChange={(e) => { setPw(e.target.value); setPwError(false); }}
                placeholder="Enter admin password"
                className={`w-full bg-cream/8 border rounded-xl px-4 py-3 text-cream placeholder:text-cream/30 text-sm outline-none transition-colors ${
                  pwError ? "border-red-500/60 focus:border-red-400" : "border-cream/12 focus:border-papaya/50"
                }`}
              />
              {pwError && (
                <p className="text-red-400 text-xs font-mono mt-1.5 flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" /> Incorrect password
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-papaya text-cream font-semibold rounded-xl py-3 hover:bg-papaya-deep transition-colors"
            >
              Sign In
            </button>
          </form>
          <p className="text-center text-cream/20 text-xs font-mono mt-6">
            Only authorised staff can access this panel
          </p>
        </motion.div>
      </div>
    );
  }

  // ── Admin dashboard ───────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-cream-dim">
      {/* Top bar */}
      <div className="sticky top-0 z-30 bg-ink text-cream px-6 py-3 flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-papaya font-display font-bold text-sm">S</div>
          <div>
            <p className="font-semibold text-sm">Suresh Veg &amp; Fruits</p>
            <p className="text-cream/40 text-[0.65rem] font-mono uppercase tracking-widest">Menu Admin Panel</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <AnimatePresence>
            {saved && (
              <motion.span
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-1.5 text-lime text-xs font-mono"
              >
                <Check className="h-3.5 w-3.5" /> Saved
              </motion.span>
            )}
          </AnimatePresence>
          <button
            onClick={handleLogout}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cream/8 hover:bg-cream/15 text-xs font-mono transition-colors"
          >
            <LogOut className="h-3.5 w-3.5" /> Sign Out
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard label="Total Items" value={stats.total} icon={Package} color="border-ink/8 bg-white text-ink" />
          <StatCard label="Live on Site" value={stats.live} icon={Eye} color="border-lime/20 bg-lime/5 text-ink" />
          <StatCard label="Hidden" value={stats.hidden} icon={EyeOff} color="border-ink/8 bg-white text-ink" />
          <StatCard label="Avg Price" value={`₹${stats.avgPrice}`} icon={TrendingUp} color="border-papaya/20 bg-papaya/5 text-ink" />
        </div>

        {/* Table card */}
        <div className="bg-white rounded-3xl border border-ink/8 shadow-sm overflow-hidden">
          {/* Table header bar */}
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between px-6 py-5 border-b border-ink/6">
            <div className="flex gap-2 flex-wrap">
              {MENU_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setCatFilter(cat.id)}
                  className={`px-3.5 py-1.5 rounded-full font-mono text-xs uppercase tracking-wide transition-all ${
                    catFilter === cat.id ? "bg-ink text-cream" : "bg-cream-dim text-ink/50 hover:text-ink"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <div className="relative flex-1 sm:w-48">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-ink/35" />
                <input
                  placeholder="Search items…"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-8 pr-3 py-2 bg-cream-dim text-sm rounded-xl w-full outline-none focus:ring-2 focus:ring-papaya/25 text-ink placeholder:text-ink/35"
                />
              </div>
              <button
                onClick={openAdd}
                className="flex items-center gap-1.5 px-4 py-2 bg-papaya text-cream rounded-xl text-sm font-semibold hover:bg-papaya-deep transition-colors shrink-0"
              >
                <Plus className="h-4 w-4" /> Add Item
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left border-b border-ink/6">
                  <th className="px-6 py-3 font-mono text-[0.65rem] uppercase tracking-widest text-ink/35 w-16" />
                  <th className="px-0 py-3 font-mono text-[0.65rem] uppercase tracking-widest text-ink/35">Item</th>
                  <th className="py-3 pr-4 font-mono text-[0.65rem] uppercase tracking-widest text-ink/35 hidden sm:table-cell">Category</th>
                  <th className="py-3 pr-4 font-mono text-[0.65rem] uppercase tracking-widest text-ink/35">Price</th>
                  <th className="py-3 pr-4 font-mono text-[0.65rem] uppercase tracking-widest text-ink/35">Status</th>
                  <th className="py-3 font-mono text-[0.65rem] uppercase tracking-widest text-ink/35">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink/4 px-6">
                <AnimatePresence>
                  {filtered.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="py-16 text-center text-ink/35 font-mono text-sm">
                        No items match your filter.
                      </td>
                    </tr>
                  ) : (
                    filtered.map((item) => (
                      <tr key={item.id} className="group">
                        <td className="px-6 py-2.5 w-16">
                          {item.photo ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img src={item.photo} alt={item.name} className="h-12 w-12 rounded-xl object-cover" />
                          ) : (
                            <div className="h-12 w-12 rounded-xl bg-cream-dim flex items-center justify-center">
                              <Package className="h-5 w-5 text-ink/25" />
                            </div>
                          )}
                        </td>
                        <td className="py-2.5 pr-4">
                          <p className={`font-semibold text-ink text-sm ${!item.available ? "line-through opacity-50" : ""}`}>{item.name}</p>
                          <p className="text-ink/40 text-xs font-mono mt-0.5 max-w-[220px] truncate">{item.description}</p>
                        </td>
                        <td className="py-2.5 pr-4 hidden sm:table-cell">
                          <span className="px-2.5 py-1 rounded-full text-[0.6rem] font-mono uppercase tracking-wide bg-ink/5 text-ink/55">
                            {CATEGORY_LABELS[item.category] || item.category}
                          </span>
                        </td>
                        <td className="py-2.5 pr-4">
                          <span className="font-mono text-base font-bold text-ink">₹{item.price}</span>
                        </td>
                        <td className="py-2.5 pr-4">
                          <button
                            onClick={() => handleToggle(item.id)}
                            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-semibold transition-colors ${
                              item.available
                                ? "bg-lime/15 text-lime-deep hover:bg-lime/25"
                                : "bg-ink/8 text-ink/40 hover:bg-ink/12"
                            }`}
                          >
                            {item.available ? <Eye className="h-3 w-3" /> : <EyeOff className="h-3 w-3" />}
                            {item.available ? "Live" : "Hidden"}
                          </button>
                        </td>
                        <td className="py-2.5">
                          <div className="flex items-center gap-1">
                            <button onClick={() => openEdit(item)} className="p-2 rounded-xl hover:bg-papaya/10 text-ink/40 hover:text-papaya transition-colors" title="Edit">
                              <Edit3 className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => { if (confirm(`Delete "${item.name}"?`)) handleDelete(item.id); }}
                              className="p-2 rounded-xl hover:bg-red-50 text-ink/35 hover:text-red-500 transition-colors"
                              title="Delete"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </AnimatePresence>
              </tbody>
            </table>
          </div>

          <div className="px-6 py-4 border-t border-ink/6 flex items-center justify-between">
            <p className="font-mono text-xs text-ink/35">
              Showing {filtered.length} of {items.length} items
            </p>
            <button
              onClick={resetToDefault}
              className="text-xs font-mono text-ink/35 hover:text-ink/60 underline underline-offset-2 transition-colors"
            >
              Reset to defaults
            </button>
          </div>
        </div>

        {/* Quick price guide */}
        <div className="rounded-2xl bg-ink text-cream p-7">
          <h2 className="font-display text-xl font-semibold mb-4 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-lime" /> Price Overview by Category
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {(["juice","vegetable_juice","milkshake","special"] as const).map((cat) => {
              const catItems = items.filter((i) => i.category === cat && i.available);
              const avg = catItems.length ? Math.round(catItems.reduce((s,i) => s+i.price, 0) / catItems.length) : 0;
              const min = catItems.length ? Math.min(...catItems.map((i) => i.price)) : 0;
              const max = catItems.length ? Math.max(...catItems.map((i) => i.price)) : 0;
              return (
                <div key={cat} className="rounded-xl bg-cream/5 border border-cream/10 p-4">
                  <p className="font-mono text-[0.65rem] uppercase tracking-widest text-cream/40 mb-2">
                    {CATEGORY_LABELS[cat]}
                  </p>
                  <p className="font-display text-2xl font-bold text-turmeric">₹{avg}</p>
                  <p className="text-cream/40 text-xs font-mono mt-1">avg · ₹{min}–₹{max}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Edit / Add modal ─────────────────────────────────────────────── */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 backdrop-blur-sm p-4"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden"
            >
              <div className="flex items-center justify-between px-7 py-5 border-b border-ink/8">
                <h2 className="font-display text-xl font-semibold text-ink">
                  {editItem ? "Edit Item" : "Add New Item"}
                </h2>
                <button onClick={() => setShowModal(false)} className="p-2 rounded-xl hover:bg-cream-dim text-ink/40">
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="px-7 py-6 space-y-5 max-h-[70vh] overflow-y-auto">
                {/* Photo preview */}
                {draft.photo && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={draft.photo} alt="preview" className="w-full h-40 object-cover rounded-2xl" />
                )}

                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <label className="block font-mono text-[0.65rem] uppercase tracking-widest text-ink/40 mb-1.5">Item Name *</label>
                    <input
                      ref={nameRef}
                      value={draft.name}
                      onChange={(e) => setDraft({ ...draft, name: e.target.value })}
                      placeholder="e.g. Mango Milkshake"
                      className="w-full border border-ink/12 rounded-xl px-4 py-2.5 text-sm text-ink outline-none focus:border-papaya/50 focus:ring-2 focus:ring-papaya/10 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[0.65rem] uppercase tracking-widest text-ink/40 mb-1.5">Category *</label>
                    <div className="relative">
                      <select
                        value={draft.category}
                        onChange={(e) => setDraft({ ...draft, category: e.target.value as MenuItem["category"] })}
                        className="w-full border border-ink/12 rounded-xl px-4 py-2.5 text-sm text-ink outline-none focus:border-papaya/50 appearance-none bg-white"
                      >
                        <option value="juice">Fruit Juice</option>
                        <option value="vegetable_juice">Veg Juice</option>
                        <option value="milkshake">Milkshake</option>
                        <option value="special">Special Shake</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-ink/35 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[0.65rem] uppercase tracking-widest text-ink/40 mb-1.5">Price (₹) *</label>
                    <input
                      type="number"
                      min={0}
                      value={draft.price || ""}
                      onChange={(e) => setDraft({ ...draft, price: Number(e.target.value) })}
                      placeholder="e.g. 80"
                      className="w-full border border-ink/12 rounded-xl px-4 py-2.5 text-sm text-ink outline-none focus:border-papaya/50 focus:ring-2 focus:ring-papaya/10 transition-colors"
                    />
                  </div>

                  <div className="col-span-2">
                    <label className="block font-mono text-[0.65rem] uppercase tracking-widest text-ink/40 mb-1.5">Description</label>
                    <textarea
                      rows={2}
                      value={draft.description}
                      onChange={(e) => setDraft({ ...draft, description: e.target.value })}
                      placeholder="Short description of the item…"
                      className="w-full border border-ink/12 rounded-xl px-4 py-2.5 text-sm text-ink outline-none focus:border-papaya/50 resize-none transition-colors"
                    />
                  </div>

                  <div className="col-span-2">
                    <label className="block font-mono text-[0.65rem] uppercase tracking-widest text-ink/40 mb-1.5">
                      Photo URL <span className="normal-case opacity-60">(Unsplash or any HTTPS image)</span>
                    </label>
                    <div className="flex gap-2">
                      <input
                        value={draft.photo || ""}
                        onChange={(e) => setDraft({ ...draft, photo: e.target.value })}
                        placeholder="https://images.unsplash.com/..."
                        className="flex-1 border border-ink/12 rounded-xl px-4 py-2.5 text-sm text-ink outline-none focus:border-papaya/50 transition-colors"
                      />
                      <div className="flex h-[42px] w-[42px] items-center justify-center rounded-xl bg-cream-dim border border-ink/8 shrink-0">
                        <UploadCloud className="h-4 w-4 text-ink/30" />
                      </div>
                    </div>
                  </div>

                  <div className="col-span-2">
                    <label className="block font-mono text-[0.65rem] uppercase tracking-widests text-ink/40 mb-1.5">Tags <span className="normal-case opacity-60">(comma separated)</span></label>
                    <input
                      value={(draft.tags || []).join(", ")}
                      onChange={(e) => setDraft({ ...draft, tags: e.target.value.split(",").map((t) => t.trim()).filter(Boolean) })}
                      placeholder="e.g. Bestseller, Seasonal, Health"
                      className="w-full border border-ink/12 rounded-xl px-4 py-2.5 text-sm text-ink outline-none focus:border-papaya/50 transition-colors"
                    />
                  </div>

                  <div className="col-span-2 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setDraft({ ...draft, available: !draft.available })}
                      className={`relative h-6 w-11 rounded-full transition-colors ${draft.available ? "bg-lime" : "bg-ink/20"}`}
                    >
                      <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-all ${draft.available ? "left-[22px]" : "left-0.5"}`} />
                    </button>
                    <span className="text-sm text-ink font-medium">
                      {draft.available ? "Visible on site (Live)" : "Hidden from site"}
                    </span>
                  </div>

                  <div className="col-span-2 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setDraft({ ...draft, featured: !draft.featured })}
                      className={`relative h-6 w-11 rounded-full transition-colors ${draft.featured ? "bg-papaya" : "bg-ink/20"}`}
                    >
                      <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-all ${draft.featured ? "left-[22px]" : "left-0.5"}`} />
                    </button>
                    <span className="text-sm text-ink font-medium">
                      Featured (shown on homepage)
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 px-7 py-5 border-t border-ink/8">
                <button
                  onClick={() => setShowModal(false)}
                  className="flex-1 py-3 rounded-xl border border-ink/12 text-ink/60 font-semibold text-sm hover:bg-cream-dim transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  disabled={!draft.name.trim() || draft.price <= 0}
                  className="flex-1 py-3 rounded-xl bg-papaya text-cream font-semibold text-sm hover:bg-papaya-deep transition-colors disabled:opacity-40 flex items-center justify-center gap-2"
                >
                  <Save className="h-4 w-4" />
                  {editItem ? "Save Changes" : "Add Item"}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
