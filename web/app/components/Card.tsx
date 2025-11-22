'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface CardProps {
  title: string;
  description: string;
  icon?: string;
  image?: string;
  category?: string;
  level?: 'beginner' | 'intermediate' | 'advanced';
  href: string;
  meta?: { icon: React.ReactNode; text: string }[];
  variant?: 'default' | 'image-top' | 'overlay' | 'minimal';
}

export default function Card({
  title,
  description,
  icon,
  image,
  category,
  level,
  href,
  meta,
  variant = 'default',
}: CardProps) {
  const levelColors = {
    beginner: 'level-beginner',
    intermediate: 'level-intermediate',
    advanced: 'level-advanced',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
    >
      <Link href={href} className={`card-modern card-${variant}`}>
        {/* 画像セクション */}
        {image && (
          <div className="card-image-wrapper">
            <div
              className="card-image"
              style={{ backgroundImage: `url(${image})` }}
            />
            <div className="card-image-overlay" />
          </div>
        )}

        {/* カードヘッダー */}
        <div className="card-header">
          {icon && !image && (
            <div className="card-icon-wrapper">
              <div className="card-icon">{icon}</div>
              <div className="card-icon-glow" />
            </div>
          )}
          
          {(category || level) && (
            <div className="card-badges">
              {level && (
                <span className={`card-badge ${levelColors[level]}`}>
                  {level}
                </span>
              )}
              {category && <span className="card-category">{category}</span>}
            </div>
          )}
        </div>

        {/* カードコンテンツ */}
        <div className="card-content">
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description}</p>

          {meta && meta.length > 0 && (
            <div className="card-meta">
              {meta.map((item, index) => (
                <div key={index} className="card-meta-item">
                  <span className="meta-icon-svg">{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* カードフッター */}
        <div className="card-footer">
          <span className="card-link">
            詳細を見る
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 15L12.5 10L7.5 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>

        {/* ホバーエフェクト */}
        <div className="card-hover-effect" />
      </Link>
    </motion.div>
  );
}
