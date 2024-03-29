"""Made the file attachment field nullable and removed the file data field

Revision ID: 57bfb1a1a22f
Revises: 669c476a0858
Create Date: 2024-02-16 16:15:01.435976

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '57bfb1a1a22f'
down_revision = '669c476a0858'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('leave_applications', schema=None) as batch_op:
        batch_op.alter_column('file_attachment',
               existing_type=sa.VARCHAR(),
               nullable=True)
        batch_op.drop_column('file_data')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('leave_applications', schema=None) as batch_op:
        batch_op.add_column(sa.Column('file_data', sa.BLOB(), nullable=True))
        batch_op.alter_column('file_attachment',
               existing_type=sa.VARCHAR(),
               nullable=False)

    # ### end Alembic commands ###
