'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  background?: 'default' | 'accent' | 'dark';
  spacing?: 'default' | 'large' | 'small';
}

export default function Section({
  id,
  title,
  subtitle,
  children,
  className = '',
  background = 'default',
  spacing = 'default',
}: SectionProps) {
  const spacingClasses = {
    small: 'section-spacing-small',
    default: 'section-spacing-default',
    large: 'section-spacing-large',
  };

  return (
    <section
      id={id}
      className={`section-modern section-bg-${background} ${spacingClasses[spacing]} ${className}`}
    >
      <div className="section-container">
        {(title || subtitle) && (
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            {title && <h2 className="section-title">{title}</h2>}
            {subtitle && <p className="section-subtitle">{subtitle}</p>}
          </motion.div>
        )}
        <div className="section-content">{children}</div>
      </div>
    </section>
  );
}
