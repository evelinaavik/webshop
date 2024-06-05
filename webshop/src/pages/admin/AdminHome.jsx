import React from 'react'
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom";
import { useTranslation } from 'react-i18next';

function AdminHome() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('Welcome to React')}</h1>
      <Button as={Link} to="/admin/maintain-categories/" variant="primary">{t('maintain-categories')}</Button>{' '}
      <Button as={Link} to="/admin/edit-categories/"variant="secondary">{t('edit-categories')}</Button>{' '}
      <Button as={Link} to="/admin/maintain-products/"variant="primary">{t('maintain-products')}</Button>{' '}
      <Button as={Link} to="/admin/edit-products/"variant="secondary">{t('edit-products')}</Button>{' '}
      <Button as={Link} to="/admin/maintain-shops/"variant="primary">{t('maintain-shops')}</Button>{' '}
      <Button as={Link} to="/admin/add-product/"variant="success">{t('add-product')}</Button>{' '}
      <Button as={Link} to="/admin/book-supplier/"variant="success">{t('book-supplier')}</Button>{' '}

      <Button variant="info">Info</Button>{' '}
      <Button variant="light">Light</Button>{' '}
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>
    </div>
  )
}

export default AdminHome