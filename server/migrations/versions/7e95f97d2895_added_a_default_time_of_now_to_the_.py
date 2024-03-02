"""Added a default time of now to the timestamp attribute of the OTP table

Revision ID: 7e95f97d2895
Revises: 42e2a1eac39d
Create Date: 2024-03-01 20:25:41.667351

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '7e95f97d2895'
down_revision = '42e2a1eac39d'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('_alembic_tmp_otp')
    with op.batch_alter_table('otp', schema=None) as batch_op:
        batch_op.alter_column('timestamp',
               existing_type=sa.DATETIME(),
               nullable=False)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('otp', schema=None) as batch_op:
        batch_op.alter_column('timestamp',
               existing_type=sa.DATETIME(),
               nullable=True)

    op.create_table('_alembic_tmp_otp',
    sa.Column('id', sa.INTEGER(), nullable=False),
    sa.Column('email', sa.VARCHAR(), nullable=False),
    sa.Column('otp', sa.VARCHAR(), nullable=False),
    sa.Column('timestamp', sa.DATETIME(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    # ### end Alembic commands ###
