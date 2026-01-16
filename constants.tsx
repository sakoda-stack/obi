
import React from 'react';
import { Users, BookOpen, Layout, HelpCircle, FileText, Download, Building2, CreditCard, ChevronRight } from 'lucide-react';
import { Resource, NewsItem, Partner } from './types';

export const NAVIGATION = [
  { id: 'alliance', label: '提携企業制度', icon: <Building2 className="w-5 h-5" />, desc: '銀行・メーカー等優待' },
  { id: 'manual', label: '実務マニュアル', icon: <BookOpen className="w-5 h-5" />, desc: '業務規定・申請フロー' },
  { id: 'flyer', label: 'チラシ・販促', icon: <Layout className="w-5 h-5" />, desc: '顧客用ツール・雛形' },
  { id: 'faq', label: 'よくある質問', icon: <HelpCircle className="w-5 h-5" />, desc: 'Q&A・相談コーナー' },
];

export const PARTNER_LOGOS = [
  { name: 'MUFG', url: 'https://www.mufg.jp/dam/pressrelease/2023/pdf/news-20230328-001_ja.pdf' }, // Dummy URL, we'll use consistent placeholder logos
  'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=200',
  'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&q=80&w=200',
  'https://images.unsplash.com/photo-1614850523011-8f49ffc73908?auto=format&fit=crop&q=80&w=200',
  'https://images.unsplash.com/photo-1614850523598-81148ea013c5?auto=format&fit=crop&q=80&w=200',
  'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&q=80&w=200',
  'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=200',
];

export const NEWS: NewsItem[] = [
  { id: 'n1', date: '2024.07.25', title: '【新着】戸建モデル「レーベン・エスタブリッシュ」販売ツール公開', badge: '重要' },
  { id: 'n2', date: '2024.07.20', title: '提携銀行各社の8月適用金利一覧を更新しました', badge: '更新' },
  { id: 'n3', date: '2024.07.15', title: '【キャンペーン】住宅設備アップグレード支援制度の開始', badge: '告知' },
  { id: 'n4', date: '2024.07.10', title: '夏季休暇期間中の各種申請書類の受付締切について', badge: '事務' },
];

export const TOP_RESOURCES: Resource[] = [
  { id: 'r1', title: '2024年度版 提携ローン金利優遇回答集', category: 'pricing', updatedAt: '2024/07/20', url: '#' },
  { id: 'r2', title: '重要事項説明書（戸建提携版）作成マニュアル', category: 'manual', updatedAt: '2024/06/15', url: '#' },
  { id: 'r3', title: '物件紹介パンフレット 汎用テンプレート', category: 'form', updatedAt: '2024/07/18', url: '#' },
  { id: 'r4', title: '住宅展示場 来場者配布用ノベルティ申請書', category: 'form', updatedAt: '2024/05/22', url: '#' },
];

export const ALLIANCE_PARTNERS: Partner[] = [
  {
    name: '提携金融機関 (都市銀行・地方銀行)',
    logo: 'https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?auto=format&fit=crop&q=80&w=200',
    description: 'タカラレーベン専属の金利プラン。Web事前審査から本申込みまでのスピード対応が強み。',
    benefits: ['LEBEN専用優遇金利', '団信特約ラインナップ拡充', '最短1日のスピード審査']
  },
  {
    name: '住宅設備メーカー (LIXIL/Panasonic)',
    logo: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=200',
    description: '最新のキッチン、バス、洗面設備を特別パッケージで提供。ショールーム同行支援もあり。',
    benefits: ['標準仕様アップグレード優待', '長期10年製品保証付帯', '展示品入替セールの先行案内']
  },
  {
    name: 'インフラ・生活支援 (J:COM/東京ガス)',
    logo: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=200',
    description: '入居後すぐに使えるインターネット環境や、ガス・電気のセット割を営業担当からご案内可能。',
    benefits: ['入居者専用特別割引料金', '開通工事費用の実質無料化', 'スマートホーム機器導入支援']
  }
];
